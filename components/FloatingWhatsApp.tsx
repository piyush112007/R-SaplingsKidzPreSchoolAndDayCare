"use client";

import { FaWhatsapp } from "react-icons/fa";
import styles from "./FloatingWhatsApp.module.css";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919770967699?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20school."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={styles.wrapper}
    >
      <span className={styles.pulse}></span>

      <div className={styles.button}>
        <FaWhatsapp />
      </div>
    </a>
  );
}
