"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./ServicesSection.module.scss";

const services = [
  {
    title: "ARCHITECTURE + VAASTU INTEGRATION",
    description: `
Humancentric Design + Vedic 81 Pada Vaastu Integrated Architectural Process.

At Kalpavaastu Design Studio, Architecture is approached as a balance between human experience, spatial intelligence, and timeless design principles. Our process integrates Human-Centric Design with the precision of the Vedic 81 Pada Vaastu framework, creating spaces that are not only visually refined, but deeply aligned with the way people live, work, and interact.

Every project begins with understanding human behavior, movement, light, proportion, and emotional comfort. Vaastu is not treated as superstition or surface-level placement, but as a structured architectural science that informs planning, orientation, spatial hierarchy, and energy balance within the built environment.

The result is architecture that feels intuitive, functional, and enduring — spaces that perform efficiently while carrying a quiet sense of harmony and sophistication. From luxury residences to commercial environments, our focus remains on creating architecture that enhances lifestyle, supports well-being, and retains long-term relevance beyond temporary design trends.
who value clarity, detail, and meaningful design, the architectural process becomes rooted equally in logic, aesthetics, and human experience
    `,
    image: "/images/service/service1.jpeg",
  },

  {
    title: "STRUCTURE DESIGN",
    description: `
At Kalpavaastu Design Studio, structural design is fully integrated into our architectural process through in-house structural engineering services. This ensures precise coordination between architecture and structure from concept to execution.

Our structural systems are designed to deliver safety, stability, efficiency, and long-term performance while respecting the architectural intent of the project. Every structural decision is carefully engineered to optimize load distribution, construction feasibility, material efficiency, and spatial flexibility.

By managing architecture and structural design under one roof, we reduce coordination gaps, eliminate execution conflicts, and streamline the overall construction process. This integrated approach enables faster decision-making, higher technical accuracy, and better project outcomes.

From luxury residences to commercial developments, we deliver structurally sound solutions engineered with precision, discipline, and clarity — creating buildings that are efficient, durable, and built to perform for generations.
    `,
    image: "/images/service/service2.png",
  },

  {
    title: "INTERIOR DESIGN",
    description: `
At Kalpavaastu Design Studio, we believe interior design is not merely about creating visually beautiful spaces, but about shaping experiences, emotions, and the way people live every day. A space should reflect the personality, lifestyle, and aspirations of its users — otherwise, it becomes a space admired from a distance rather than truly lived in.

Our approach combines human-centric planning, spatial intelligence, material sensitivity, and timeless aesthetics to craft interiors that feel natural, refined, and deeply personal. Every element — from spatial planning and lighting to textures, proportions, and bespoke detailing — is carefully considered to create balance, comfort, and lasting functionality.

We believe true luxury lies not in excess, but in clarity, restraint, and purposeful design. Specializing in curated residential, commercial, and hospitality interiors, we create spaces tailored for clients who value sophistication, individuality, and enduring quality. By integrating contemporary design sensibilities with contextual understanding and Vedic Vaastu principles, we deliver environments that feel intuitive, harmonious, and emotionally connected.

From concept development to execution oversight, our process remains collaborative, meticulous, and detail-driven, ensuring every space reflects its owner with uncompromising refinement.
    `,
    image: "/images/service/serviceHero1.png",
  },
//   {
//     title: " TURN KEY PROJECTS",
//     description: `
// At Kalpavaastu Design Studio, our turnkey service is designed to deliver a seamless transition from concept to completion with complete accountability under one roof. By integrating architecture, interiors, and in-house structural design into a unified process, we ensure every project is executed with precision, coordination, and long-term reliability.

// Our approach goes beyond construction management. Every decision — from planning and structural systems to material selection and execution detailing — is aligned with the larger vision of creating timeless, high-performance spaces built for generations. The integration of in-house structural engineering allows us to maintain technical accuracy, reduce execution conflicts, optimize construction efficiency, and preserve the integrity of the original design intent throughout the project lifecycle.
//     `,
//     image: "/images/service/service4.png",
//   },
];

export default function ServicesSection() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`${styles.serviceRow} ${
              index % 2 !== 0 ? styles.reverse : ""
            }`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.content}>
              <div className={styles.headingWrapper}>
                <span className={styles.line}></span>

                <h2>{service.title}</h2>
              </div>

              <p>{service.description}</p>
            </div>

            <div className={styles.imageWrapper}>
              <Image
                src={service.image}
                alt={service.title}
                fill
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}