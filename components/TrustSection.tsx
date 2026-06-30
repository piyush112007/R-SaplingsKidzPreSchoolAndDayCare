"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function TrustSection() {
  const slides = [
    {
      image: "/assets/whyparentsChooseUs/IMG_8927.jpg",
      title: "Learning Through Fun",
      description:
        "Every classroom activity is designed to spark creativity, curiosity, and confidence while ensuring children enjoy every moment of learning.",
    },
    {
      image: "/assets/Gallery/ScienceExhib2.png",
      title: "Safe & Happy Environment",
      description:
        "A child-friendly campus with caring educators, modern classrooms, and secure surroundings where every child feels at home.",
    },
    {
      image: "/assets/Gallery/ParentsAct.jpg",
      title: "Interactive Activities",
      description:
        "Music, dance, storytelling, art, and hands-on activities help children develop socially, emotionally, and intellectually.",
    },
    {
      image: "/assets/Gallery/PrincipalIndi.jpg",
      title: "Celebrating Every Milestone",
      description:
        "From classroom achievements to annual events, every child's growth is celebrated with joy and encouragement.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="trust-section" id="trust">
      <div className="trust-deco-butterfly">
        <Image src="/assets/butterfly.png" alt="" width={70} height={70} />
      </div>

      <div className="trust-deco-rocket">
        <Image src="/assets/rocket.png" alt="" width={70} height={70} />
      </div>

      <div className="trust-header">
        <span className="trust-tag">Why parents trust us</span>

        <h2>Why Parents Trust R&apos; Saplings</h2>

        <p>
          We provide a premium, safe, and stimulating space where child-first
          care meets a progressive foundation curriculum.
        </p>
      </div>

      <div className="trust-carousel">
        <Image
          src={slides[current].image}
          alt={slides[current].title}
          fill
          className="trust-large-img"
          sizes="100vw"
          priority
        />

        {/* Overlay */}
        <div className="trust-info-card">
          <h3>{slides[current].title}</h3>

          <p>{slides[current].description}</p>
        </div>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${current === index ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
