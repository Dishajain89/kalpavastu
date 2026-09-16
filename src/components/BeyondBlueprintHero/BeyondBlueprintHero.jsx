"use client";

import Image from "next/image";
import styles from "./BeyondBlueprintHero.module.scss";

export default function BeyondBlueprintHero() {
  return (
    <section className={styles.hero}>
      {/* Desktop Image */}
      <Image
        src="/images/blueprintHero.png"
        alt="Beyond Blueprint - A Canvas of Non-Executions"
        fill
        priority
        quality={100}
        className={`${styles.heroImage} ${styles.desktopImage}`}
        sizes="(min-width: 769px) 100vw, 1px"
      />

      {/* Mobile Image */}
      <Image
        src="/images/blueprintHeroMobile.png"
        alt="Beyond Blueprint - A Canvas of Non-Executions Mobile"
        fill
        priority
        quality={100}
        className={`${styles.heroImage} ${styles.mobileImage}`}
        sizes="(max-width: 768px) 100vw, 1px"
      />
    </section>
  );
}