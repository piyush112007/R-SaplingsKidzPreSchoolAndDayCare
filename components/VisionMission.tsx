"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./VisionMission.module.css";

const slides = [
  {
    title: "Vision",
    description:
      "To provide a caring, secure, and engaging environment where every child learns through play, exploration, and meaningful experiences. Through passionate educators, individualized attention, and strong partnerships with families, we foster each child's social, emotional, physical, and intellectual development.",
    backgroundImage: "/assets/Gallery/RepublicDay.jpeg",
    cardImage: "/assets/Gallery/Speech.jpeg",
  },
  {
    title: "Mission",
    description:
      "To provide a safe, nurturing, and stimulating environment led by loving mentors. We blend structured early education with creative play to support every kid's physical, emotional, and intellectual growth.",
    backgroundImage: "/assets/vision/bg2.jpg",
    cardImage: "/assets/vision/card2.jpg",
  },
  {
    title: "Creative Expression",
    description:
      "Children discover their unique talents through art, music, dance, storytelling, and imaginative play that inspires creativity and confidence.",
    backgroundImage: "/assets/Gallery/Holi.png",
    cardImage: "/assets/Gallery/FancyDress.jpeg",
  },
  {
    title: "Social Skills",
    description:
      "Helping children build friendships, communicate confidently, and learn the values of kindness, teamwork, and respect.",
    backgroundImage: "/assets/vision/bg4.jpg",
    cardImage: "/assets/vision/card4.jpg",
  },
  {
    title: "Caring Educators",
    description:
      "Our dedicated teachers provide personalized attention, gentle guidance, and constant encouragement to help every child thrive.",
    backgroundImage: "/assets/Gallery/ScienceExhib2.png",
    cardImage: "/assets/Gallery/ScienceExhib.jpeg",
  },
  {
    title: "Parent Partnership",
    description:
      "We believe the best learning happens when parents and teachers work together, celebrating every milestone in a child's early learning journey.",
    backgroundImage: "/assets/vision/bg6.jpg",
    cardImage: "/assets/vision/card6.jpg",
  },
];

export default function VisionMission() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <Image
          src={slide.backgroundImage}
          alt={slide.title}
          fill
          priority
          className={styles.backgroundImage}
        />

        <div className={styles.overlay} />

        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.title}>{slide.title}</h2>

            <p className={styles.description}>{slide.description}</p>
          </div>

          <div className={styles.right}>
            <div className={styles.card}>
              <Image
                src={slide.cardImage}
                alt={slide.title}
                fill
                className={styles.cardImage}
              />
            </div>
          </div>
        </div>

        <div className={styles.dots}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`${styles.dot} ${
                activeSlide === index ? styles.active : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
