"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import projects from "@/data/projects";

import styles from "./Portfolio.module.scss";

const PortfolioSection = () => {
  return (
    <section className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span>Our Work</span>

          <h2>Featured Projects</h2>

          <p>
            Every project reflects our commitment to
            Architecture, Structure, Interior Design
            and Vaastu.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className={styles.card}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                  />
                </div>

                <div className={styles.overlay}>
                  <span>{project.category}</span>

                  <h3>{project.title}</h3>

                  <p>{project.location}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;