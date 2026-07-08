"use client";

import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const whatsappMessage = `
*New Enquiry - Kalpavaastu*

👤 Name: ${name}
📧 Email: ${email}
📌 Subject: ${subject}

💬 Message:
${message}
`;

    const phoneNumber = "919111208209"; // Replace with client's WhatsApp Number

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );

    form.reset();
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch With Us
        </motion.h2>

        {/* Contact Cards */}

        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <FaPhoneAlt />
            <h4>Phone</h4>
            <p>+91 9111208209</p>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.infoCard}>
            <FaMapMarkerAlt />
            <h4>Address</h4>
            <p>Mz 02 Onam plaza , indore.</p>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.infoCard}>
            <MdEmail />
            <h4>Email</h4>
            <p>kalpavaastu@gmail.com</p>
          </div>
        </div>

        <div className={styles.headingBlock}>
          <h3>
            IF YOU GOT ANY QUESTIONS
            <br />
            PLEASE DO NOT HESITATE TO SEND US A MESSAGE.
          </h3>
        </div>

        {/* Form */}

        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            rows="7"
            placeholder="Message"
            required
          />

          <button type="submit">
            Send Message
          </button>
        </form>

        <div className={styles.socialSection}>
          <h3>Connect With Us</h3>

          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/profile.php?id=100063664551621"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/kalpavaastu.indore/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/ankur-kalpavaastu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.youtube.com/@KalpaVaastu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>

          </div>
        </div>
      </div>
      <div className={styles.mapWrapper}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.9851022814646!2d75.88820559999999!3d22.7287951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd6f161bbea3%3A0xe72651677ce61f84!2sKalpavaastu%20Design%20Studio!5e0!3m2!1sen!2sin!4v1780779354837!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  );
};

export default ContactForm;