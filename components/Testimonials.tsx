"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: `R' Saplings KidZ was my husband's first choice for both of our children. Having attended the nursery, he emphasized the importance of ensuring that our children experienced a classical form of tried and tested learning while in an environment that respected traditional values.`,
    author: "FARIDA TATA",
  },
  {
    text: `An amazing place where my daughter has blossomed! The teachers are caring and the learning environment is vibrant and joyful.`,
    author: "JOHN DOE",
  },
  {
    text: `We love the creative approach to learning. The facilities are wonderful and the community is welcoming.`,
    author: "SARAH SMITH",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % testimonials.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % testimonials.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + testimonials.length) %
        testimonials.length
    );
  };

  return (
    <section
      className="testimonials"
       id="reviews"
    >

      {/* Decorative Assets */}

      <Image
        src="/assets/doodle_rainbow.png"
        alt="Rainbow"
        width={400}
        height={250}
        className="rainbow"
      />

      <Image
        src="/assets/flower1.png"
        alt="Flower"
        width={250}
        height={450}
        className="flower"
      />

      <Image
        src="/assets/bat.png"
        alt="Butterfly"
        width={90}
        height={90}
        className="butterfly"
     />

      <Image
        src="/assets/Ball.png"
        alt="Ball"
        width={80}
        height={80}
        className="ball"
      />

      <Image
        src="/assets/rocket.png"
        alt="Rocket"
        width={90}
        height={90}
        className="rocket"
      />

      <Image
        src="/assets/fish.png"
        alt="Fish"
        width={90}
        height={90}
        className="fish"
      />

      <h2>See what parents are saying!</h2>

      <div className="testimonial-slider">
        <div className="testimonial-card">

          <span className="quote-top">❝</span>

          <p className="quote-text">
            {testimonials[currentIndex].text}
          </p>

          <p className="quote-author">
            ● {testimonials[currentIndex].author}
          </p>

          <span className="quote-bottom">❞</span>

        </div>
      </div>

      <div className="slider-controls">
        <button
          className="arrow-btn"
          onClick={prevSlide}
        >
          ←
        </button>

        <div className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${
                currentIndex === index
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setCurrentIndex(index)
              }
            />
          ))}
        </div>

        <button
          className="arrow-btn"
          onClick={nextSlide}
        >
          →
        </button>
      </div>
    </section>
  );
}