// Copyright 2022 Fluidity Money. All rights reserved. Use of this
// source code is governed by a GPL-style license that can be found in the
// LICENSE.md file.

import { useState } from "react";
import {
  ContinuousCarousel,
  Heading,
  useViewport,
  IntroTile,
  Video,
} from "@fluidity-money/surfing";
import { motion } from "framer-motion";
import styles from "./Landing.module.scss";
import { isSafari, isFirefox, isIOS, isMobile } from "react-device-detect";
import { i18n } from "next-i18next";

const Landing = () => {
  let type = isSafari || isIOS ? "video/quicktime" : "video/webm";
  let vidSources = (
    isSafari || isIOS
      ? ["/assets/videos/FluidityHomeloop.mov"]
      : ["/assets/videos/FluidityHomeloop.webm"]
  ).map((link) => link);

  const [state, setState] = useState({
    src: vidSources[0],
    mimeType: type,
    key: "video-0",
    loop: true,
    scale: isFirefox ? 1 : 0.5,
  });

  const { width } = useViewport();
  const breakpoint = 620;

  const moneyMoves = i18n.t("landing.moneyMoves", "Money designed to move");

  const callout = (
    <div className={styles.callout} style={{textTransform: "uppercase"}}>
      <Heading as="h4" className={styles.text}>
        {moneyMoves} {moneyMoves}
      </Heading>
      <Heading as="h4" className={styles.text}>
        {moneyMoves}
      </Heading>
    </div>
  );

  return (
    <div className={`${styles.containerLanding}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={`${styles.bgVid}`}>
          {width > breakpoint ? (
            <Video
              src={state.src}
              type={"reduce"}
              mimeType={state.mimeType}
              loop={state.loop}
              videoKey={state.key}
              scale={state.scale}
              margin={"-60px 0 0 0"}
              width={"65%"}
            />
          ) : isMobile ? (
            <Video
              src={state.src}
              type={"reduce"}
              mimeType={state.mimeType}
              loop={state.loop}
              videoKey={state.key}
              scale={state.scale * 2}
              margin={"-400px 0 0 0"}
            />
          ) : (
            <></>
          )}
        </div>
      </motion.div>
      {/* Hero animation */}
      <motion.div className={styles.content}>
        {width < breakpoint && width > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: "-20vh" }}
            animate={{ opacity: [0, 0, 0, 1], y: 0 }}
            transition={{ duration: 1, type: "tween" }}
          >
            <Heading className={styles.title} as="h3">
              Fluidity is the <br /> blockchain incentive <br /> layer,
              rewarding <br /> people for using <br /> their crypto.
            </Heading>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: "-20vh" }}
            animate={{ opacity: [0, 0, 0, 1], y: 0 }}
            transition={{ duration: 1, type: "tween" }}
          >
            <Heading as="h3">
              {i18n.t("landing.heading", "Fluidity is the blockchain incentive layer,\nrewarding people for using their crypto.")}
            </Heading>
          </motion.div>
        )}
        <div className={styles.tiles}>
          {width < breakpoint && width > 0 && (
            <motion.div
              className={styles.video}
              initial={{ y: -150, scale: 1 }}
              animate={{
                opacity: 1,
                y: [-150, -150, -150, 0],
                scale: [1, 1, 1, 0.8],
              }}
              transition={{ duration: 1, type: "tween" }}
            ></motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: "-20vh" }}
            animate={{ opacity: [0, 0, 0, 1], y: 0 }}
            transition={{ duration: 1, type: "tween" }}
            className={styles.left}
          >
            <IntroTile
              img={"/assets/images/landingIcons/1to1.png"}
              side={"left"}
            >
              {i18n.t("landing.exchange", "1 to 1 exchange rate to base wrapped assets")}
            </IntroTile>
            <IntroTile
              img={"/assets/images/landingIcons/sendReceive.png"}
              side={"left"}
            >
              {i18n.t("landing.sendReceive", "Senders and receivers\nboth qualify")}
            </IntroTile>
            <IntroTile
              img={"/assets/images/landingIcons/everyTransaction.png"}
              side={"left"}
            >
              {i18n.t("landing.qualification", "Every transaction qualifies as a reward")}
            </IntroTile>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: "-20vh" }}
            animate={{ opacity: [0, 0, 0, 1], y: 0 }}
            transition={{ duration: 1, type: "tween" }}
            className={
              width < breakpoint && width > 0 ? styles.left : styles.right
            }
          >
            <IntroTile
              img={"/assets/images/landingIcons/expectedOutcome.png"}
              side={width < breakpoint && width > 0 ? "left" : "right"}
            >
              {i18n.t("landing.outcome", "Fluidity improves your expected outcome over time")}
            </IntroTile>
            <IntroTile
              img={"/assets/images/landingIcons/forReceivers.png"}
              side={width < breakpoint && width > 0 ? "left" : "right"}
            >
              {i18n.t("landing.rewardAmount", "Rewards can range from cents to millions")}
            </IntroTile>
            <IntroTile
              img={"/assets/images/landingIcons/scalingEcosystem.png"}
              side={width < breakpoint && width > 0 ? "left" : "right"}
            >
              {i18n.t("landing.scaling", "Scaling ecosystem")}
            </IntroTile>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className={styles.carousel}
        initial={{ opacity: 0, y: "100vh" }}
        animate={{ opacity: [1, 1, 1, 0], y: [0, 0, 0, 100] }}
        transition={{ duration: 6, type: "tween" }}
      >
        <div className={styles.carousel}>
          <ContinuousCarousel direction={"right"}>
            <div>
              {callout}
              {callout}
              {callout}
              {callout}
              {callout}
              {callout}
              {callout}
              {callout}
              {callout}
              {callout}
              {callout}
            </div>
          </ContinuousCarousel>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
