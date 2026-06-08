"use client";

import Image from "next/image";
import styles from "./AboutHero.module.scss";

const AboutHero = () => {
    return (
        <section className={styles.aboutHero}>
            <div className={styles.container}>

                <div className={styles.leftContent}>
                  

                    <div className={styles.philosophyCard}>
                        <h1>OUR PHILOSOPHY</h1>

                        <p>
                            At Kalpavaastu Design Studio, we believe a home should do more than look beautiful — it should support the people living within it.
                        </p>

                        <p>
                            Our approach combines traditional Vedic Vastu principles with modern architectural planning and structural engineering. Instead of treating Vastu, design, and construction as separate processes, we integrate them from the very beginning.
                        </p>
                        <p>Every project starts with understanding the family, their lifestyle, aspirations, and daily living patterns. Using the 81-Pada Vastu Mandala, Aayadi calculations, climatic planning, and structural logic, we create homes that are functional, balanced, and built for long-term living.</p>
                        <p>We focus on spaces that feel comfortable, practical, naturally lit, well-ventilated, and structurally efficient — not just visually impressive.</p>
                        <p>At Kalpavaastu, architecture is not driven by trends or superficial aesthetics. We design homes that remain timeless, emotionally grounding, and deeply connected to the people they are built for.</p>
                        <p>Because a home should not only be seen.<br/>It should be experienced, every day.</p>
                    </div>
                </div>

                <div className={styles.founderCard}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/founder1.png"
                            alt="Founder"
                            fill
                            priority
                        />
                    </div>

                    <div className={styles.founderInfo}>
                        <div className={styles.nameDivider}>
                            <span>ANKUR SHUKLA</span>
                        </div>
                        <p>FOUNDER AND LEAD ARCHITECT</p>
                    </div>

                    <div className={styles.signatureBox}>
                        <Image
                            src="/images/handwritten.png"
                            alt="Signature"
                            // fill
                            height={80}
                            width={200}
                            // priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutHero;