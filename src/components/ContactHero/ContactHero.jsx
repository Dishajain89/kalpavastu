"use client";

import styles from "./ContactHero.module.scss";

const ContactHero = () => {
  return (
    <section className={styles.contactHero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1>CONTACT US</h1>
      </div>
    </section>
  );
};

export default ContactHero;