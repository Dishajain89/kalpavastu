"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./TeamSection.module.scss";

const teamMembers = [
  {
    title: "PRESENCE",
    subtitle: "Presence in experience",
    name: "ER. ANKUR SHUKLA",
    role: "Founder And Lead Architect",
    qualification:
      "(B.E Civil Engineering)\n(3rd Generation Vaastu Sthapati)\nM.A in Vaastu Shastra",
    image: "/images/founder1.png",
    featured: true,
  },

  {
    title: "POWER",
    subtitle: "Power in design",
    image: "/images/piller.1.png",
    featured: true,
  },

  {
    title: "PERSISTENCE",
    subtitle: "Persistence in vision",
    name: "ID. SHUBHANGINI HALEN",
    role: "Lead Interior Designer",
    qualification: "",
    image: "/images/team/shubhangini.jpeg",
    featured: true,
  },

  {
    name: "ER. NILESH SHARMA",
    role: "Associate Senior Structural Engineer",
    qualification: "(M.E Structural Designing)",
    image: "/images/team/nilesh.png",
    featured: false,
  },

  {
    name: "ER. PUNIT SHARMA",
    role: "Principal Structural Designer",
    qualification: "(M.E (Hons.) Structure Designing)",
    image: "/images/team/punit.png",
    featured: false,
  },

  {
    name: "ER. RAJKUMAR MANGOLIA",
    role: "Associate Senior Structural Designer",
    qualification: "(M.E Structure Designing)",
    image: "/images/team/rajkumar.jpg",
    featured: false,
  },

  {
    name: "ER. SOURABH GUPTA",
    role: "Associate Engineer - Quality Control",
    qualification: "(Parikshan Laboratory)",
    image: "/images/team/sourabh.png",
    featured: false,
  },
  {
    name: "DHEERENDRA KUSHWAH",
    role: "BIM/CAD",
    image: "/images/team/dheerendra.jpg",
    featured: false,
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.7,
    },
  }),
};

export default function TeamSection() {
  const featuredMembers = teamMembers.filter(
    (member) => member.featured
  );

  const otherMembers = teamMembers.filter(
    (member) => !member.featured
  );

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        {/* TOP ROW */}

        <div className={styles.topRow}>
          {featuredMembers.map((member, index) => (
            <motion.article
              key={index}
              className={`${styles.memberCard} ${styles.featuredCard}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <h3>{member.title}</h3>

              <span className={styles.handwritten}>
                {member.subtitle}
              </span>

              <div
                className={`${styles.imageWrapper} ${
                  !member.name ? styles.pillarImage : ""
                }`}
              >
                <Image
                  src={member.image}
                  alt={member.name || "Pillar"}
                  fill
                />
              </div>

              {member.name && (
                <>
                  <div className={styles.nameDivider}>
                    <span>{member.name}</span>
                  </div>

                  <p className={styles.role}>
                    {member.role}
                  </p>

                  <p className={styles.qualification}>
                    {member.qualification}
                  </p>
                </>
              )}
            </motion.article>
          ))}
        </div>

        {/* BOTTOM ROW */}

        <div className={styles.bottomRow}>
          {otherMembers.map((member, index) => (
            <motion.article
              key={index}
              className={`${styles.memberCard} ${styles.smallCard}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                />
              </div>

              <div className={styles.nameDivider}>
                <span>{member.name}</span>
              </div>

              <p className={styles.role}>
                {member.role}
              </p>

              <p className={styles.qualification}>
                {member.qualification}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}