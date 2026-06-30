"use client";

import { useRouter } from "next/navigation";
import styles from "./ProgramsSection.module.css";

const programs = [
  {
    title: "Pre Nursery",
    age: "18 Months - 2.5 Years",
    description:
      "A warm and nurturing environment where toddlers begin their first learning journey through sensory play, music, stories, and fun activities.",
  },
  {
    title: "Nursery",
    age: "2.5 - 4 Years",
    description:
      "Children develop communication, creativity, social skills, and early literacy through engaging hands-on learning experiences.",
  },
  {
    title: "LKG",
    age: "4 - 5 Years",
    description:
      "Focused on strengthening language, mathematics, creativity, and confidence while encouraging curiosity and independent thinking.",
  },
  {
    title: "UKG",
    age: "5 - 6 Years",
    description:
      "Preparing children for primary school with advanced foundational concepts, problem-solving, teamwork, and interactive learning.",
  },
  {
    title: "Class 1",
    age: "6+ Years",
    description:
      "A balanced curriculum that promotes academic excellence, creativity, communication, and lifelong learning habits.",
  },
];

export default function ProgramsSection() {
  const router = useRouter();

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.badge}>PROGRAMS</span>

        <h2 className={styles.title}>Programs We Offer</h2>

        <p className={styles.subtitle}>
          Every stage of your child's journey is thoughtfully designed to
          nurture confidence, creativity, and a lifelong love for learning.
        </p>
      </div>

      <div className={styles.grid}>
        {programs.map((program) => (
          <div key={program.title} className={styles.card}>
            <span className={styles.age}>{program.age}</span>

            <h3>{program.title}</h3>

            <p>{program.description}</p>

            <button
              onClick={() => router.push("/contact")}
              className={styles.button}
            >
              Enquire Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
