"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

// Predefined list of gallery items with categories
const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Little Superhero, Big Dreams",
    category: "Art & Craft",
    description:
      "Creativity takes center stage as our young superheroes build confidence, imagination, and stage presence through fun-filled performances.",
    bgColor: "#ffebee",
    borderColor: "#e91e63",
    asset: "/assets/Gallery/FancyDress.jpeg",
  },
  {
    id: 2,
    title: "A Day of Active Adventures",
    category: "Active Play",
    description:
      "Sports Day brings smiles, movement, and memorable moments as children participate in fun-filled races and team activities.",
    bgColor: "#e8f5e9",
    borderColor: "#4caf50",
    asset: "/assets/Gallery/SportDay.jpeg",
  },
  {
    id: 3,
    title: "Tiny Speakers, Big Confidence",
    category: "Learning",
    description:
      "Every presentation helps children build confidence, communication skills, and the courage to express their ideas with pride.",
    bgColor: "#e3f2fd",
    borderColor: "#2196f3",
    asset: "/assets/Gallery/Speech.jpeg",
  },
  {
    id: 4,
    title: "Curious Minds at Work",
    category: "Learning",
    description:
      "Through fun science experiments and hands-on activities, children explore, observe, and discover the wonders of the world while developing curiosity and critical thinking.",
    bgColor: "#fff3e0",
    borderColor: "#ff9800",
    asset: "/assets/Gallery/ScienceExhib2.png",
  },
  {
    id: 5,
    title: "Colors of Creativity",
    category: "Art & Craft",
    description:
      "From festive mask-making to colorful celebrations, children express their imagination through creative art activities while building confidence and fine motor skills.",
    emoji: "🏖️",
    bgColor: "#fffde7",
    borderColor: "#fbc02d",
    asset: "/assets/Gallery/Holi.png",
  },
  {
    id: 6,
    title: "Celebrating Our Nation Together",
    category: "Learning",
    description:
      "Republic Day celebrations help children understand the values of unity, respect, and patriotism through joyful performances, activities, and memorable moments shared with their teachers and friends.",
    emoji: "🐟",
    bgColor: "#e0f7fa",
    borderColor: "#d4009f",
    asset: "/assets/Gallery/RepublicDay.jpeg",
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Art & Craft", "Active Play", "Learning"];

  const filteredItems =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <>
      <Navbar />

      <main style={{ minHeight: "80vh", backgroundColor: "#fff" }}>
        {/* Gallery Hero */}
        <section
          style={{
            backgroundColor: "#fff9c4", // soft pastel yellow
            padding: "12rem 10% 7rem",
            position: "relative",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "relative",
              zIndex: 2,
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <span
              style={{
                background: "#fbc02d",
                color: "#5f4b00",
                padding: "6px 16px",
                borderRadius: "20px",
                fontSize: "0.9rem",
                fontWeight: "bold",
              }}
            >
              DAILY MOMENTS
            </span>
            <h1
              style={{
                fontSize: "5rem",
                color: "#f57f17",
                marginTop: "1.5rem",
                marginBottom: "1.5rem",
                fontFamily: "var(--font-headings)",
              }}
            >
              Life at R'saplings
            </h1>
            <p
              style={{
                fontSize: "1rem",
                color: "#f57f17",
                lineHeight: "1.6",
                fontWeight: "500",
              }}
            >
              Explore the colorful tapestry of daily adventures, creative
              experiments, and playful learning steps our little ones take here
              every single day.
            </p>
          </div>

          {/* Cloud SVG separator */}
        </section>

        {/* Gallery Content Section */}
        <section style={{ padding: "4rem 10% 8rem", background: "#53bfd5" }}>
          {/* Category Filter Tabs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
              marginBottom: "3rem",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  background: selectedCategory === cat ? "#ff6b2b" : "#f5f5f5",
                  color: selectedCategory === cat ? "white" : "#23327a",
                  border: "none",
                  padding: "10px 24px",
                  borderRadius: "25px",
                  fontSize: "1.05rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow:
                    selectedCategory === cat
                      ? "0 4px 10px rgba(255, 107, 43, 0.3)"
                      : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                style={{
                  background: item.bgColor,
                  borderRadius: "24px",
                  border: `3px solid ${item.borderColor}`,
                  overflow: "hidden",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.02)",
                  transition: "transform 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="gallery-card-hover"
              >
                {/* Image / Illustration Container */}
                <div
                  style={{
                    height: "220px",
                    background: "white",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // padding: "20px",
                    borderBottom: `2px dashed ${item.borderColor}`,
                  }}
                >
                  <Image
                    src={item.asset}
                    alt={item.title}
                    width={500}
                    height={220}
                    style={{
                      objectFit: "cover",
                      maxHeight: "100%",
                      overflow: "hidden",
                    }}
                  />
                </div>

                {/* Info Text */}
                <div
                  style={{
                    padding: "20px",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <span
                      style={{
                        color: item.borderColor,
                        fontSize: "0.85rem",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      {item.category}
                    </span>
                    <h3
                      style={{
                        fontSize: "1.4rem",
                        color: "#23327a",
                        marginTop: "5px",
                        marginBottom: "10px",
                        fontFamily: "var(--font-headings)",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        color: "#455a64",
                        fontSize: "0.95rem",
                        lineHeight: "1.5",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
