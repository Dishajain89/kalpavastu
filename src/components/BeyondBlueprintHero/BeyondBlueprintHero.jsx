"use client";

import Image from "next/image";
import styles from "./BeyondBlueprintHero.module.scss";

export default function BeyondBlueprintHero() {
  return (
    <section className={styles.hero}>
      {/* 1. Desktop & Laptop View (MacBook, Ultra-wides, 1080p, 1440p) */}
      <div className={styles.desktopWrapper}>
        <Image
          src="/images/blueprintHero.png"
          alt="Beyond Blueprint - A Canvas of Non-Executions"
          fill
          priority
          quality={100}
          className={`${styles.heroImage} ${styles.desktopImage}`}
          sizes="(min-width: 1025px) 100vw, 1px"
        />
      </div>

      {/* 2. Tablet & Mobile View (iPad, iPhone, Androids) */}
      <div className={styles.mobileWrapper}>
        <Image
          src="/images/blueprintHeroMobile.png"
          alt="Beyond Blueprint - A Canvas of Non-Executions Mobile"
          fill
          priority
          quality={100}
          className={`${styles.heroImage} ${styles.mobileImage}`}
          sizes="(max-width: 1024px) 100vw, 1px"
        />
      </div>
    </section>
  );
}