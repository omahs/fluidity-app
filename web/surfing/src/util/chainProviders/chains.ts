interface Chain {
  short: SupportedChainsList;
  name: string;
}

interface ISupportedChains {
  ETH: Chain;
  ARB: Chain;
  SOL: Chain;
}

export type SupportedChainsList = keyof ISupportedChains

export const SupportedChains: ISupportedChains = {
  ETH: {
    name: "ethereum",
    short: "ETH",
  },
  ARB: {
    name: "arbitrum",
    short: "ARB",
  },
  SOL: {
    name: "solana",
    short: "SOL",
  },
  // Unused
  // CMPD = {
  //   name: "compound",
  //   short: "CMPD"
  // },
  // POL = {
  //   name: "polygon",
  //   short: "POL"
  // },
}

