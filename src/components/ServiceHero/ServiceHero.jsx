"use client";

import Image from "next/image";
import styles from "./ServiceHero.module.scss";

const ServiceHero = () => {
  return (
    <section className={styles.serviceHero}>
      <div className={styles.logoWrapper}>
        <Image
          src="/images/service/serviceHero2.png"
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

export default ServiceHero;