import Link from "next/link";
import styles from "./Copyright.module.scss";

const Copyright = () => {
  return (
    <section className={styles.copyright}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {new Date().getFullYear()} Kalpavaastu Architects All Rights Reserved.<span className={styles.designer}>
         Developed by <Link href="https://www.instagram.com/dizzytech_byd/?hl=en" target="_blank" rel="noopener noreferrer">Dizzytech_byd</Link>
        </span>
        </p>

       
      </div>
    </section>
  );
};

export default Copyright;