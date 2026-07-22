"use client";

import Image from "next/image";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.logoWrapper}>
        <Image
          src="/images/logoFinal.png"
          alt="Kalpavaastu"
          width={700}
          height={450}
          priority
          className={styles.logo}
        />
      </div>
    </section>
  );
};

export default Hero;