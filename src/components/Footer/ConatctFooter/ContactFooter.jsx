"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import styles from "./ContactFooter.module.scss";

const ContactFooter = () => {
  return (
    <footer className={styles.contactFooter}>
      <div className={styles.pattern}></div>

      <div className={styles.content}>
        <Image
          src="/images/logo1.png"
          alt="Kalpavaastu"
          width={180}
          height={180}
          className={styles.logo}
        />

        {/* <p className={styles.tagline}>
          Architecture • Structure • Interiors • Vaastu
        </p> */}

        <div className={styles.socialLinks}>
          <Link href="https://www.instagram.com/kalpavaastu.indore/" target="_blank" rel="noopener noreferrer">
            Instagram
          </Link>

          <Link href="https://www.facebook.com/profile.php?id=100063664551621" target="_blank" rel="noopener noreferrer">
            Facebook
          </Link>

          <Link href="https://www.linkedin.com/in/ankur-kalpavaastu" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>

          <Link href="https://www.youtube.com/@KalpaVaastu" target="_blank" rel="noopener noreferrer">
            YouTube
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;