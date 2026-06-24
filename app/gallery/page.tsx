"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

// Predefined list of gallery items with categories
const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Colors of Spring",
    category: "Art & Craft",
    description:
      "Finger painting and exploring water colors on recycled paper.",
    emoji: "🎨",
    bgColor: "#ffebee",
    borderColor: "#e91e63",
    asset: "/assets/flower1.png",
  },
  {
    id: 2,
    title: "Outdoor Exploration",
    category: "Active Play",
    description:
      "Chasing butterflies and exploring garden plants in our backyard.",
    emoji: "🦋",
    bgColor: "#e8f5e9",
    borderColor: "#4caf50",
    asset: "/assets/butterfly.png",
  },
  {
    id: 3,
    title: "Space & Rockets Day",
    category: "Learning",
    description:
      "Building cardboard rockets and learning about the moon and stars.",
    emoji: "🚀",
    bgColor: "#e3f2fd",
    borderColor: "#2196f3",
    asset: "/assets/rocket.png",
  },
  {
    id: 4,
    title: "Creative Storytelling",
    category: "Art & Craft",
    description:
      "Bringing favorite storybook characters to life with clay modeling.",
    emoji: "🧸",
    bgColor: "#fff3e0",
    borderColor: "#ff9800",
    asset: "/assets/mascot_lion.png",
  },
  {
    id: 5,
    title: "Fun in the Sandbox",
    category: "Active Play",
    description:
      "Building castles and learning motor skills through tactile play.",
    emoji: "🏖️",
    bgColor: "#fffde7",
    borderColor: "#fbc02d",
    asset: "/assets/Ball.png",
  },
  {
    id: 6,
    title: "Exploring Aquatic Life",
    category: "Learning",
    description: "Learning about sea creatures and painting friendly fish.",
    emoji: "🐟",
    bgColor: "#e0f7fa",
    borderColor: "#00bcd4",
    asset: "/assets/fish.png",
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
            borderBottom: "4px solid #ff6b2b",
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
                    padding: "20px",
                    borderBottom: `2px dashed ${item.borderColor}`,
                  }}
                >
                  <Image
                    src={item.asset}
                    alt={item.title}
                    width={130}
                    height={130}
                    style={{
                      objectFit: "contain",
                      maxHeight: "100%",
                      transform: "scale(1.05)",
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
