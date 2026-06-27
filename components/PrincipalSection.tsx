"use client";

import Image from "next/image";
import styles from "./PrincipalSection.module.css";

const principals = [
  {
    name: "Mrs. Jyoti Soni  ",
    designation: "Principal",
    image: "/assets/principal.jpg",
    message:
      "At our school, every child is encouraged to learn, explore, and grow with confidence. We believe in creating a nurturing environment that develops curiosity, creativity, and strong values while preparing children for a bright future.",
  },
];

export default function PrincipalSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {principals.map((principal, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imageWrapper}>
              <Image
                src={principal.image}
                alt={principal.name}
                fill
                className={styles.image}
              />
            </div>

            <div className={styles.content}>
              <span className={styles.smallHeading}>Our Principal</span>

              <h2 className={styles.name}>{principal.name}</h2>

              <p className={styles.designation}>{principal.designation}</p>

              <p className={styles.message}>{principal.message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
