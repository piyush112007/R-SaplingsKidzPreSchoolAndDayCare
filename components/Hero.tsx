import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-head">
          <h1>R&apos; Saplings KidZ PreSchool & DayCare</h1>

          <p
            className="hero-tagline"
            style={{
              fontSize: "1.4rem",
              color: "#2a316b",
              marginBottom: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Best Preschool & Day Care Centre for Your Child
          </p>

          <p className="hero-subtitle">
            <span className="badge">LIVE CCTV</span>
            <span>EYFS Curriculum</span>
            <span>|</span>
            <span>8:30 AM to 6 PM</span>
            <span>|</span>
            <span>6 Months+ Children</span>
          </p>

          <Link
            href="/contact"
            className="btn-primary"
            style={{ display: "inline-block", textDecoration: "none" }}
          >
            Join our Family
          </Link>
        </div>
      </div>

      <div className="hero-bottom-clouds">
        <svg
          viewBox="0 0 1440 100"
          className="cloud-svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#53bfd5"
            d="M0,50 C120,80 240,20 360,50 C480,80 600,20 720,50 C840,80 960,20 1080,50 C1200,80 1320,20 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </section>
  );
}
