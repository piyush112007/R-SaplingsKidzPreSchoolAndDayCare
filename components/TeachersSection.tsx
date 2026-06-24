"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./TeachersSection.module.css";

const teachers = [
  {
    name: "Ms. Sophia",
    role: "Principal / Founder",
    image: "/teachers/sophia.jpg",
  },
  {
    name: "Ms. Clara",
    role: "Senior Educator",
    image: "/teachers/clara.jpg",
  },
  {
    name: "Ms. Lily",
    role: "Creative Arts Lead",
    image: "/teachers/lily.jpg",
  },
  {
    name: "Mr. Leo",
    role: "Physical Play Instructor",
    image: "/teachers/leo.jpg",
  },
];

export default function TeachersSection() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % teachers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % teachers.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + teachers.length) % teachers.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();

    touchStartX.current = null;
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Loving Educators</h2>

        <p className={styles.description}>
          Behind every happy sapling is a caring gardener. Our team consists of
          qualified, warm, and highly passionate early childhood professionals
          who treat every child like their own.
        </p>

        <div
          className={styles.carouselWrapper}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={prevSlide}
            aria-label="Previous Teacher"
          >
            ❮
          </button>

          <div className={styles.carouselTrack}>
            {teachers.map((teacher, index) => {
              const position =
                (index - current + teachers.length) % teachers.length;

              let cardClass = styles.hidden;

              if (position === 0) cardClass = styles.center;
              else if (position === 1) cardClass = styles.right;
              else if (position === teachers.length - 1)
                cardClass = styles.left;

              return (
                <div
                  key={teacher.name}
                  className={`${styles.card} ${cardClass}`}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      className={styles.image}
                    />
                  </div>

                  <h3>{teacher.name}</h3>
                  <p>{teacher.role}</p>
                </div>
              );
            })}
          </div>

          <button
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={nextSlide}
            aria-label="Next Teacher"
          >
            ❯
          </button>
        </div>

        <div className={styles.dots}>
          {teachers.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                current === index ? styles.activeDot : ""
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
