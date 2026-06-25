import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const DETAILED_TESTIMONIALS = [
  {
    text: "R' Saplings KidZ was our absolute best choice. The care and attention each child receives is phenomenal. My daughter loved going to school every single day, and her vocabulary and confidence blossomed in just a few months!",
    author: "Farida Tata",
    relation: "Mother of Zara (Pre-K)",
    stars: 5,
    color: "#e8f5e9", // green pastel
    borderColor: "#a5d6a7",
  },
  {
    text: "An amazing place where my daughter has blossomed! The teachers are incredibly caring and the learning environment is vibrant, structured, and joyful. They truly understand early childhood development.",
    author: "John Doe",
    relation: "Father of Lily (Daycare)",
    stars: 5,
    color: "#e3f2fd", // blue pastel
    borderColor: "#90caf9",
  },
  {
    text: "We love the creative approach to learning here. It's not just worksheets; they learn through hands-on activities, music, and social play. The community is welcoming and communication is top-notch.",
    author: "Sarah Smith",
    relation: "Mother of Leo (Toddler Program)",
    stars: 5,
    color: "#fff3e0", // orange pastel
    borderColor: "#ffcc80",
  },
  {
    text: "The transition to preschool can be tough for a child, but the staff here made it so smooth and filled with love. My son talks about his teachers all weekend. Truly a second home for our little one.",
    author: "Michael Chang",
    relation: "Father of Arthur (Pre-K)",
    stars: 5,
    color: "#fce4ec", // pink pastel
    borderColor: "#f8bbd0",
  },
  {
    text: "Every activity is thought out to stimulate intellectual and emotional growth. The facility is incredibly clean, safe, and colorful. I recommend R' Saplings KidZ to any parent looking for a premium start.",
    author: "Elena Rostova",
    relation: "Mother of Nikolai (Kindergarten)",
    stars: 5,
    color: "#efebe9", // brown/clay pastel
    borderColor: "#d7ccc8",
  },
  {
    text: "We were looking for a daycare that felt like a family, and we found it. The educators are deeply passionate and work closely with parents. The feedback we receive daily is detailed and comforting.",
    author: "Priya Nair",
    relation: "Mother of Ishaan (Toddler)",
    stars: 5,
    color: "#fffde7", // yellow pastel
    borderColor: "#fff59d",
  },
];

export const metadata = {
  title: "Parents Echoes | R' Saplings KidZ PreSchool & DayCare",
  description:
    "Read heartfelt reviews and testimonials from our community of parents.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "80vh",
          backgroundColor: "#fafafa",
        }}
      >
        {/* Testimonials Hero */}
        <section
          style={{
            backgroundColor: "#fce4ec", // soft pink
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
                background: "#d81b60",
                color: "white",
                padding: "6px 16px",
                borderRadius: "20px",
                fontSize: "0.9rem",
                fontWeight: "bold",
              }}
            >
              HEARTFELT TRUST
            </span>
            <h1
              style={{
                fontSize: "5rem",
                color: "#880e4f",
                marginTop: "1.5rem",
                marginBottom: "1.5rem",
                fontFamily: "var(--font-headings)",
              }}
            >
              Parents Echoes
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#c2185b",
                lineHeight: "1.6",
                fontWeight: "500",
              }}
            >
              Nothing brings us more joy than the words of love, gratitude, and
              feedback shared by our parents. Here is what they say about their
              child&apos;s journey at R&apos; Saplings.
            </p>
          </div>

          {/* Cloud SVG separator */}
        </section>

        {/* Testimonial Cards Wall */}
        <section
          style={{ padding: "4rem 10% 8rem", backgroundColor: "#53bfd5" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "30px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {DETAILED_TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: t.color,
                  border: `2px solid ${t.borderColor}`,
                  borderRadius: "30px",
                  padding: "2.5rem 2rem",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.02)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                {/* Large Quote Mark Decoration */}
                <span
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "20px",
                    fontSize: "4rem",
                    color: t.borderColor,
                    opacity: 0.4,
                    lineHeight: 1,
                    fontFamily: "var(--font-headings)",
                  }}
                >
                  “
                </span>

                <div style={{ zIndex: 1 }}>
                  {/* Stars */}
                  <div
                    style={{
                      color: "#ffb300",
                      fontSize: "1.2rem",
                      marginBottom: "15px",
                    }}
                  >
                    {"★".repeat(t.stars)}
                  </div>

                  <p
                    style={{
                      color: "#37474f",
                      fontSize: "1.05rem",
                      lineHeight: "1.6",
                      fontStyle: "italic",
                      marginBottom: "20px",
                    }}
                  >
                    &quot;{t.text}&quot;
                  </p>
                </div>

                <div
                  style={{
                    borderTop: `1px dashed ${t.borderColor}`,
                    paddingTop: "15px",
                    marginTop: "10px",
                  }}
                >
                  <h4
                    style={{
                      color: "#23327a",
                      fontSize: "1.15rem",
                      marginBottom: "3px",
                      fontWeight: "bold",
                    }}
                  >
                    {t.author}
                  </h4>
                  <p
                    style={{
                      color: "#546e7a",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                    }}
                  >
                    {t.relation}
                  </p>
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
