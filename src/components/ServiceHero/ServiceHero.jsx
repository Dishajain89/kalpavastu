"use client";

import Image from "next/image";
import styles from "./ServiceHero.module.scss";

const ServiceHero = () => {
  return (
    <section className={styles.serviceHero}>
      <div className={styles.serviceWrapper}>
        <Image
          src="/images/service/service_Hero.png"
          alt="Kalpavaastu"
          width={700}
          height={450}
          priority
          className={styles.serviceImage}
        />
      </div>
    </section>
  );
};

export default ServiceHero;