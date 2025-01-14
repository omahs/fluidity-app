// Copyright 2022 Fluidity Money. All rights reserved. Use of this
// source code is governed by a GPL-style license that can be found in the
// LICENSE.md file.

package main

import (
	"fmt"
	"math/big"

	"github.com/fluidity-money/fluidity-app/common/solana/aldrin"
	"github.com/fluidity-money/fluidity-app/common/solana/applications"
	"github.com/fluidity-money/fluidity-app/common/solana/lifinity"
	"github.com/fluidity-money/fluidity-app/common/solana/orca"
	"github.com/fluidity-money/fluidity-app/common/solana/raydium"
	"github.com/fluidity-money/fluidity-app/common/solana/mercurial"
	"github.com/fluidity-money/fluidity-app/common/solana/rpc"
	"github.com/fluidity-money/fluidity-app/common/solana/saber"
	"github.com/fluidity-money/fluidity-app/lib/queues/worker"
	types "github.com/fluidity-money/fluidity-app/lib/types/worker"
	"github.com/fluidity-money/fluidity-app/lib/util"
)

func parseTransaction(solanaClient *rpc.Provider, fluidTokens map[string]string, transaction worker.SolanaParsedTransaction, saberRpc, saberProgramId, orcaProgramId, raydiumProgramId, aldrinV1ProgramId, aldrinV2ProgramId, lifinityProgramId, mercurialProgramId string) ([]worker.SolanaDecoratedTransfer, error) {

	var (
		totalFee = big.NewRat(0, 1)

		transactionResult       = transaction.Transaction.Result
		transactionSignature    = transaction.Transaction.Signature
		transactionApplications = transaction.Transaction.Applications

		emission worker.SolanaAppFees
	)

	for _, app := range transactionApplications {
		var (
			fee *big.Rat
			err error
		)

		switch app {
		case applications.ApplicationSpl:
			// no application, nothing to be done

		case applications.ApplicationSaber:
			fee, _, err = saber.GetSaberFees(saberRpc, transactionResult, saberProgramId)

			emission.Saber += util.MaybeRatToFloat(fee)

		case applications.ApplicationOrca:
			fee, err = orca.GetOrcaFees(
				solanaClient,
				transactionResult,
				orcaProgramId,
				fluidTokens,
			)

			emission.Orca += util.MaybeRatToFloat(fee)

		case applications.ApplicationRaydium:
			fee, err = raydium.GetRaydiumFees(
				solanaClient,
				transactionResult,
				raydiumProgramId,
				fluidTokens,
			)

			emission.Raydium += util.MaybeRatToFloat(fee)

		case applications.ApplicationAldrinV1:
			fee, err = aldrin.GetAldrinFees(
				solanaClient,
				transactionResult,
				aldrinV1ProgramId,
				fluidTokens,
			)

			emission.AldrinV1 += util.MaybeRatToFloat(fee)

		case applications.ApplicationAldrinV2:
			fee, err = aldrin.GetAldrinFees(
				solanaClient,
				transactionResult,
				aldrinV2ProgramId,
				fluidTokens,
			)

			emission.AldrinV2 += util.MaybeRatToFloat(fee)

		case applications.ApplicationLifinity:
			fee, err = lifinity.GetLifinityFees(
				solanaClient,
				transactionResult,
				lifinityProgramId,
				fluidTokens,
			)
		case applications.ApplicationMercurial:
			fee, err = mercurial.GetMercurialFees(
				solanaClient,
				transactionResult,
				mercurialProgramId,
				fluidTokens,
			)

			emission.Lifinity += util.MaybeRatToFloat(fee)

		default:
			err = fmt.Errorf(
				"application number wasn't expected: %v",
				app,
			)
		}

		if err != nil {
			return nil, fmt.Errorf(
				"application decoding failed for parsed transaction %#v: %v",
				transactionSignature,
				err,
			)
		}

		if fee != nil {
			totalFee.Add(totalFee, fee)
		}
	}

	var (
		transfers      = transaction.Transfers
		appTransaction = transaction.Transaction
		decorated      = make([]worker.SolanaDecoratedTransfer, len(transfers))
	)

	for i, transfer := range transfers {
		var (
			token          = transfer.TokenDetails
			senderSpl      = transfer.SenderAddress
			recipientSpl   = transfer.RecipientAddress
			senderOwner    = transfer.SolanaSenderOwnerAddress
			recipientOwner = transfer.SolanaRecipientOwnerAddress
		)

		var decorator *types.SolanaWorkerDecorator

		if totalFee != nil {
			decorator_ := types.SolanaWorkerDecorator{
				ApplicationFee: totalFee,
			}

			decorator = &decorator_
		}

		decoratedTransfer := worker.SolanaDecoratedTransfer{
			Transaction:           appTransaction,
			Token:                 token,
			SenderSplAddress:      senderSpl,
			RecipientSplAddress:   recipientSpl,
			SenderOwnerAddress:    senderOwner,
			RecipientOwnerAddress: recipientOwner,
			Decorator:             decorator,
			AppEmissions:          emission,
		}

		decorated[i] = decoratedTransfer
	}

	return decorated, nil
}
