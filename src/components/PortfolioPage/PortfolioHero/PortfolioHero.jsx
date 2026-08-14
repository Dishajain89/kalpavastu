"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./PortfolioHero.module.scss";

const PortfolioHero = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/projects/portfolioHero.jpg"
        alt="Kalpavaastu Design Journal"
        fill
        priority
        className={styles.background}
        sizes="100vw"
      />

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Design Journal
        </motion.h1>
      </div>
    </section>
  );
};

export default PortfolioHero;