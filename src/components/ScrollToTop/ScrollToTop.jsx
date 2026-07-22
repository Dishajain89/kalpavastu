"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaArrowUp } from "react-icons/fa";
import styles from "./ScrollToTop.module.scss";

export default function ScrollToTop() {
  const pathname = usePathname();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Home page pr hide
  if (pathname === "/") return null;

  return (
    <button
      onClick={scrollTop}
      className={`${styles.scrollBtn} ${
        visible ? styles.show : ""
      }`}
    >
      <FaArrowUp />
    </button>
  );
}