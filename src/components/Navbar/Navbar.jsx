"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.navbar} ${
        sticky ? styles.sticky : ""
      }`}
    >
      <div className={styles.container}>
        {/* Logo */}

        <Link href="/" className={styles.logoWrapper}>
          <div className={styles.logoImage}>
            <Image
              src="/images/logo2.png"
              alt="Kalpavaastu Design Studio"
              fill
              priority
            />
          </div>

          <div className={styles.logoText}>
            <h2>KALPAVAASTU</h2>
            <span>DESIGN STUDIO</span>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav className={styles.desktopMenu}>
          <Link
            href="/"
            className={pathname === "/" ? styles.active : ""}
          >
            Home
          </Link>
           <Link
            href="/about"
            className={
              pathname === "/about"
                ? styles.active
                : ""
            }
          >
            About Us
          </Link>

          <Link
            href="/services"
            className={
              pathname === "/services"
                ? styles.active
                : ""
            }
          >
            Services
          </Link>
 

          <Link
            href="/portfolio"
            className={
              pathname === "/portfolio"
                ? styles.active
                : ""
            }
          >
            Portfolio
          </Link>

          <Link
            href="/beyondBlueprint"
            className={
              pathname === "/beyondBlueprint"
                ? styles.active
                : ""
            }
          >
            Beyond Blueprints
          </Link>

          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? styles.active
                : ""
            }
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <HiOutlineX />
          ) : (
            <HiOutlineMenuAlt3 />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.showMenu : ""
        }`}
      >
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
         <Link
          href="/about"
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </Link>

        <Link
          href="/services"
          onClick={() => setMenuOpen(false)}
        >
          Services
        </Link>

       

        <Link
          href="/portfolio"
          onClick={() => setMenuOpen(false)}
        >
          Portfolio
        </Link>

        <Link
          href="/beyondBlueprint"
          onClick={() => setMenuOpen(false)}
        >
          Beyond Blueprints
        </Link>

        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Navbar;