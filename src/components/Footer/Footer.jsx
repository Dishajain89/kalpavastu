import Link from "next/link";
import Image from "next/image";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand */}

        <div className={styles.brand}>
          <Image
            src="/images/logoFinal.png"
            alt="Kalpavaastu"
            width={150}
            height={150}
          />

          <h3>KALPAVAASTU</h3>

          <p>
            Architecture • Structure Design •
            Interiors 
          </p>
        </div>

        {/* Navigation */}

        <div className={styles.links}>
          <h4>Quick Links</h4>

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Services */}

        <div className={styles.services}>
          <h4>Services</h4>

          <span>Architecture Design</span>
          <span>Interior Design</span>
          <span>Structural Design</span>
          <span>Vaastu Consultancy</span>
        </div>

        {/* Social */}

        <div className={styles.social}>
          <h4>Follow Us</h4>

          <div className={styles.icons}>
            <a href="https://www.instagram.com/kalpavaastu.indore/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>

            <a href="https://www.facebook.com/profile.php?id=100063664551621 " target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>

            <a href="https://www.linkedin.com/in/ankur-kalpavaastu" target="_blank" rel="noopener noreferrer  ">
              <FaLinkedinIn />
            </a>

            <a href="https://www.youtube.com/@KalpaVaastu" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;