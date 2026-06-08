"use client";

import { motion } from "framer-motion";

import {
  HiOutlineOfficeBuilding,
  HiOutlineUserGroup,
} from "react-icons/hi";

import {
  PiTrophyBold,
  PiBuildingsBold,
} from "react-icons/pi";

import styles from "./StatsSection.module.scss";

const stats = [
  {
    icon: <PiBuildingsBold />,
    number: "14+",
    label: "Years Experience",
  },
  {
    icon: <HiOutlineOfficeBuilding />,
    number: "300+",
    label: "Projects Completed",
  },
  {
    icon: <PiTrophyBold />,
    number: "8",
    label: "Award Winning Designs",
  },
  {
    icon: <HiOutlineUserGroup />,
    number: "100%",
    label: "Client Satisfaction",
  },
];

const StatsSection = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className={styles.statCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
          >
            <div className={styles.icon}>
              {item.icon}
            </div>

            <div className={styles.content}>
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>

            <div className={styles.pillars}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;