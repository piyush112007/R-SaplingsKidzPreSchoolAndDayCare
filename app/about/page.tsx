import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Philosophy from "@/components/Philosophy";
import TrustSection from "@/components/TrustSection";
import TeachersSection from "@/components/TeachersSection";

export const metadata = {
  title: "Our Roots | R' Saplings KidZ PreSchool & DayCare",
  description:
    "Learn about the foundations, philosophy, and journey of R' Saplings KidZ.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main style={{ minHeight: "80vh" }}>
        {/* About Hero Section */}
        <section
          className="about-hero"
          style={{
            backgroundColor: "#e8f5e9", // soft pastel green
            padding: "12rem 10% 6rem",
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
              className="journey-tag"
              style={{
                background: "#4caf50",
                color: "white",
                padding: "6px 16px",
                borderRadius: "20px",
                fontSize: "0.9rem",
                fontWeight: "bold",
              }}
            >
              OUR FOUNDATION
            </span>
            <h1
              style={{
                fontSize: "4rem",
                color: "#1b5e20",
                marginTop: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              Nurturing Seeds Into Mighty Oaks
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#2e7d32",
                lineHeight: "1.6",
                fontWeight: "500",
              }}
            >
              At R&apos; Saplings KidZ, we believe every child is a unique seed
              filled with promise and potential. Through our holistic approach
              to early education, we provide the fertile ground, love, and
              sunshine needed to help them grow.
            </p>
          </div>

          {/* Cloud SVG separator */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              lineHeight: 0,
            }}
          >
            <svg
              viewBox="0 0 1440 100"
              style={{ width: "100%", height: "60px", fill: "#ffffff" }}
            >
              <path d="M0,80 Q240,110 480,80 T960,80 T1440,80 L1440,100 L0,100 Z" />
            </svg>
          </div>
        </section>

        {/* Vision & Mission Cards */}
        <section
          style={{
            padding: "4rem 10%",
            backgroundColor: "#53bfd5",
            borderBottom: "4px solid #ff6b2b",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <div
              className="about-card"
              style={{
                background: "#fffde7", // warm pastel yellow
                padding: "2.5rem",
                borderRadius: "30px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                border: "3px dashed #fdd835",
                position: "relative",
              }}
            >
              <div style={{ color: "#fdd835", marginBottom: "1rem" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
                  <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5Z" />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "1.8rem",
                  color: "#f57f17",
                  marginBottom: "1rem",
                  fontFamily: "var(--font-headings)",
                }}
              >
                Our Vision
              </h3>
              <p
                style={{
                  color: "#5d4037",
                  lineHeight: "1.6",
                  fontSize: "1.05rem",
                }}
              >
                To create a magical space where children love to discover, learn
                through play, and develop a lifelong passion for learning,
                creating a beautiful foundation for a bright future.
              </p>
            </div>

            <div
              className="about-card"
              style={{
                background: "#e3f2fd", // sky blue pastel
                padding: "2.5rem",
                borderRadius: "30px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                border: "3px dashed #1e88e5",
                position: "relative",
              }}
            >
              <div style={{ color: "#1e88e5", marginBottom: "1rem" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "1.8rem",
                  color: "#0d47a1",
                  marginBottom: "1rem",
                  fontFamily: "var(--font-headings)",
                }}
              >
                Our Mission
              </h3>
              <p
                style={{
                  color: "#1a237e",
                  lineHeight: "1.6",
                  fontSize: "1.05rem",
                }}
              >
                To provide a safe, nurturing, and stimulating environment led by
                loving mentors. We blend structured early education with
                creative play to support every kid&apos;s physical, emotional,
                and intellectual growth.
              </p>
            </div>
          </div>
        </section>

        {/* Nurturing Pillars */}
        <Philosophy />

        {/* Child Development Journey */}
        <TrustSection />

        {/* Meet our Team Intro */}
        <TeachersSection />
        {/* <section
          style={{
            backgroundColor: "#fce4ec", // sweet pink pastel
            padding: "5rem 10% 8rem",
            textAlign: "center",
            position: "relative",
          }}
        >
          <h2
            style={{
              fontSize: "2.8rem",
              color: "#880e4f",
              marginBottom: "1.5rem",
              fontFamily: "var(--font-headings)",
            }}
          >
            Our Loving Educators
          </h2>
          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto 3rem",
              color: "#ad1457",
              fontSize: "1.1rem",
              lineHeight: "1.6",
            }}
          >
            Behind every happy sapling is a caring gardener. Our team consists
            of qualified, warm, and highly passionate early childhood
            professionals who treat every child like their own.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "30px",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {[
              {
                name: "Ms. Sophia",
                role: "Principal / Founder",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ad1457"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
              },
              {
                name: "Ms. Clara",
                role: "Senior Educator",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ad1457"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                    <path d="M6 6h10" />
                    <path d="M6 10h10" />
                  </svg>
                ),
              },
              {
                name: "Ms. Lily",
                role: "Creative Arts Lead",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ad1457"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.01445 19.1559 5.09238 19.3789 5.06834 19.5986C5.02025 20.038 5 20.5147 5 21C5 21.5523 5.44772 22 6 22H12Z" />
                    <circle cx="7.5" cy="10.5" r="1.5" />
                    <circle cx="11.5" cy="7.5" r="1.5" />
                    <circle cx="16.5" cy="9.5" r="1.5" />
                  </svg>
                ),
              },
              {
                name: "Mr. Leo",
                role: "Physical Play Instructor",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ad1457"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M6 12c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6Z" />
                    <path d="M12 2v4" />
                    <path d="M12 18v4" />
                    <path d="M2 12h4" />
                    <path d="M18 12h4" />
                  </svg>
                ),
              },
            ].map((team, idx) => (
              <div
                key={idx}
                style={{
                  background: "white",
                  padding: "2rem 1.5rem",
                  borderRadius: "20px",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.03)",
                  border: "2px solid #f8bbd0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    background: "#fce4ec",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  {team.icon}
                </div>
                <h4
                  style={{
                    fontSize: "1.3rem",
                    color: "#c2185b",
                    marginBottom: "0.2rem",
                  }}
                >
                  {team.name}
                </h4>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#e91e63",
                    fontWeight: "600",
                  }}
                >
                  {team.role}
                </p>
              </div>
            ))}
          </div>
        </section> */}
      </main>

      <Footer />
    </>
  );
}
