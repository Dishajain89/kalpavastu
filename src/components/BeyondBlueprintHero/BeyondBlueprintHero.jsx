"use client";

import Image from "next/image";
import styles from "./BeyondBlueprintHero.module.scss";

export default function BeyondBlueprintHero() {
  return (
    <section className={styles.hero}>
      {/* Desktop Image */}
      <Image
        src="/images/blueprintHero.png"
        alt="Beyond Blueprint"
        fill
        priority
        className={`${styles.heroImage} ${styles.desktopImage}`}
        sizes="100vw"
      />

      {/* Mobile Image */}
      <Image
        src="/images/blueprintHeroMobile.png"
        alt="Beyond Blueprint"
        fill
        priority
        className={`${styles.heroImage} ${styles.mobileImage}`}
        sizes="100vw"
      />
    </section>
  );
}