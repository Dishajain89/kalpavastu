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

          <Link href="#">
            Facebook
          </Link>

          <Link href="#">
            LinkedIn
          </Link>

          <Link href="#">
            YouTube
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;