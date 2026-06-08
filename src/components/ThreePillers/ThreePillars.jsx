"use client";

import { motion } from "framer-motion";
import styles from "./ThreePillars.module.scss";
import Image from "next/image";

const pillars = [
  {
    title: "PRESENCE",
    icon:  "/images/piller.1.png",
    content: `
When you build a home, you carry the weight of every decision.
The sleepless nights wondering if the design is right. The anxiety of watching your life savings take shape in brick and mortar. The fear that something important was missed — in the drawing, on the site, in the calculation.
At Kalpavaastu — you never carry that weight alone.
We are present at the drawing board when your design takes its first form. We are present in the meeting room when decisions need to be made. We are present on the site when your foundation is laid, your columns rise, and your home begins to breathe.
When the project is smooth — we are present.
When the project is difficult — we are present.
When you have questions at inconvenient hours — we are present.
When something goes wrong and needs immediate attention — we are present.
A home is built over months. Trust is built over moments.
We show up for every moment.
This is our first commitment to you.
We are always present.
    `,
  },
  {
    title: "PERSISTENCE",
    icon:  "/images/piller.1.png",
    content: `
Every family that comes to us carries a dream.
But dreams are rarely simple. Behind the vision of a beautiful home lies the complexity of a real family — with real constraints, real conflicts, real fears, and real aspirations that sometimes contradict each other.
We have heard it all.
The plot that seems impossible to design on. The budget that seems insufficient for the vision. The family member whose requirements conflict with everyone else's. The Vastu challenge that seems to have no elegant solution. The structural constraint that threatens the open space you've dreamed of for years.
We do not walk away from complexity.
We walk toward it.
We hear your pain — every constraint, every worry, every compromise you fear you'll have to make. And then we persist. Through revision after revision. Through challenge after challenge. Through every moment when an easier answer is available but the right answer requires more work.
We persist in design until the solution is not just acceptable — but extraordinary.
We persist in execution until what was drawn becomes what was built — without compromise.
We persist in our commitment to you until you stand inside your completed home and feel — without reservation — that this is exactly what you dreamed.
We do not deliver when it is convenient.
We deliver.
Period.
This is our second commitment to you.
We hear your pain. We persist. We deliver.
    `,
  },
  {
    title: "POWER",
    icon:  "/images/piller.1.png",
    content: `
There are architects who know design.
There are engineers who know structure.
There are Vastu consultants who know ancient science.
We are all three — simultaneously — in every project we undertake
Our power comes from a rare convergence.
The power of 5000 years of Vastu Shastra — practiced in the traditional guru-shishya lineage, applied through 81-Pada grid analysis and Aayadi Shodhanam calculations that personalize every home to the specific family that will inhabit it.
The power of structural engineering mastery — an in-house team that works from day one of design, not after it, eliminating every compromise between beauty, Vastu compliance, and construction economy.
The power of 14 years of field experience — of homes designed, built, delivered, and lived in across Indore's most demanding residential landscapes.
The power of photorealistic visualization — allowing you to experience your home completely before a single brick is laid.
This combined power means we do not present you with beautiful drawings and hope they survive contact with reality.
We design with power — because every decision is backed by ancient science, engineering precision, and deep field knowledge.
We present with power — because we show you exactly what you are getting before you commit to building it.
We execute with power — because our presence through construction ensures that the precision of design becomes the precision of reality.

    `,
  },
];

export default function ThreePillars() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>THREE PILLARS - ONE PROMISE</h2>
          <span className={styles.bigNumber}>3</span>


          <p>
            We are present — through every moment of your project, whatever the condition.
            <br />
            We are persistent — we hear your pain, we persist in design, we deliver.
            <br />
            We are powerful — backed by ancient science and modern mastery, we design, present, and execute with complete power.
            <br />
            This is not what we aspire to be.
            <br />
            This is who we are.
          </p>
        </motion.div>

        <div className={styles.pillarsGrid}>
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className={styles.card}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
              }}
            >
              <h3 className={styles.cardTitle}>{pillar.title}</h3>

              <div className={styles.icon}>
                 <Image
                   src={pillar.icon}
                                  // alt={member.name}
                    alt="Icon"
                    fill
                                />
                
              </div>

              <p>{pillar.content}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.bottomText}>
          <p>
            A Kalpavaastu home is not the product of good intentions.
            <br />
            It is the product of complete mastery — ancient and modern,
            spiritual and structural, creative and precise.
            <br />
            We design with presence. We present with persistence.
            We execute with power.
          </p>

          <div className={styles.divider}>
            ✦
          </div>
        </div>
      </div>
    </section>
  );
}