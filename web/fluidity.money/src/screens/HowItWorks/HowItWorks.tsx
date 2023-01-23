// Copyright 2022 Fluidity Money. All rights reserved. Use of this
// source code is governed by a GPL-style license that can be found in the
// LICENSE.md file.

import { useEffect, useState } from "react";
import {
  ContinuousCarousel,
  Heading,
  LinkButton,
  Text,
  useViewport,
  Video,
} from "@fluidity-money/surfing";
import styles from "./HowItWorks.module.scss";
import Link from "next/link";
import { i18n } from "next-i18next";

const HowItWorks = () => {
  /* 
  carousels at the top,
  3 paragraphs on the left, 
  image on the right,
  paragraph highlighted has different specific image,
  scrolls thought automatically and constantly
   */
  const images = [
    {
      bgImage: "/assets/videos/FluidityWrap.mp4",
      text: i18n.t("fluidify", "fluidify"),
    },
    {
      bgImage: "/assets/videos/FluidityYield.mp4",
      text: i18n.t("yield", "yield")
    },
    {
      bgImage: "/assets/videos/FluidityHowItWorks.mp4",
      text: i18n.t("govern", "govern"),
    },
  ].map(({ bgImage, ...image }) => ({
    ...image,
    bgImage: bgImage,
  }));

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { width } = useViewport();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (currentImageIndex) => (currentImageIndex + 1) % images.length
      );
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  const backgroundText = images[currentImageIndex].text;

  const size = width > 1130 ? "h2" : width < 1130 && width > 520 ? "h4" : "h5";

  const howItWorks = i18n.t("howItWorks", "How it works");

  const callout = (
    <div className={styles.callout} style={{ textTransform: "uppercase" }}>
      <Heading as="h4" className={styles.text}>
        {howItWorks} {howItWorks} {howItWorks}
      </Heading>
      <Heading as="h4" className={styles.text}>
        {howItWorks}
      </Heading>
    </div>
  );

  return (
    <div className={`${styles.container} bg-dark`}>
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

      <div className={styles.grid}>
        <div className={styles.left}>
          <Text as={"p"} prominent={currentImageIndex === 0}>
            {i18n.t("howItWorks.oneToOne", "Fluid assets are a 1:1 wrapped asset with perpetual payout properties.")}
          </Text>
          <Text as={"p"} prominent={currentImageIndex === 1}>
            {i18n.t("howItWorks.yieldGeneration", "They distribute yield when when used on any on-chain use-case. Yield is gained through utility.")}
          </Text>
          <Text as={"p"} prominent={currentImageIndex === 2}>
            {i18n.t("howItWorks.governance", "The user is incentivised through governance.")}
          </Text>
          <Link href="/howitworks" passHref>
            <a href="/howitworks" style={{ textTransform: "uppercase" }}>
              <LinkButton
                type={"internal"}
                size={"medium"}
                handleClick={() => {}}
              >
                {howItWorks}
              </LinkButton>
            </a>
          </Link>
        </div>
        <div className={styles.right}>
          {
            // Text == FLUIDITY
            currentImageIndex === 0 ? (
              <img
                className={styles.behind}
                style={{ opacity: 1, position: "absolute", zIndex: 1 }}
                src={"/assets/text/FLUIDIFY.svg"}
                alt={images[currentImageIndex].text}
              />
            ) : (
              <div className={styles.backgroundText}>
                {/* Missing font WHYTE INK SUPER */}
                <Heading as={size}>
                  <strong>{backgroundText}</strong>
                </Heading>
              </div>
            )
          }

          <div className={styles.video}>
            {currentImageIndex === 0 ? (
              <Video
                height={width < 550 && 370}
                src={"/assets/videos/FluidityWrap.mp4"}
                type={"fit"}
                loop={true}
                videoKey={"abc"}
                scale={0.6}
              />
            ) : currentImageIndex === 1 ? (
              <Video
                height={width < 550 && 370}
                src={"/assets/videos/FluidityYield.mp4"}
                type={"fit"}
                loop={true}
                videoKey={"xyz"}
                scale={0.7}
              />
            ) : (
              <Video
                height={width < 550 && 370}
                src={"/assets/videos/FluidityHowItWorks.mp4"}
                type={"fit"}
                loop={true}
                videoKey={"jfk"}
                scale={0.7}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
