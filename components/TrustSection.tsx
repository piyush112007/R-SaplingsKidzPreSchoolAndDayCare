import Image from "next/image";
import {
  Video,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

export default function TrustSection() {
  const reasons = [
    {
      title: "Live CCTV Webcast",
      desc: "Watch your child learn, play, and grow in real-time. We offer secure parent login access for absolute peace of mind.",
      icon: <Video size={28} strokeWidth={2.2} />,
      bgColor: "#f3e5f5",
      borderColor: "#9c27b0",
    },
    {
      title: "EYFS Curriculum",
      desc: "Following the UK's Early Years Foundation Stage framework to support structured milestones and play-based learning.",
      icon: <GraduationCap size={28} strokeWidth={2.2} />,
      bgColor: "#e3f2fd",
      borderColor: "#2196f3",
    },
    {
      title: "Loving Educators",
      desc: "Our certified teachers are specialized in early childhood care and use warm, nurturing, child-first methods.",
      icon: <HeartHandshake size={28} strokeWidth={2.2} />,
      bgColor: "#fce4ec",
      borderColor: "#e91e63",
    },
    {
      title: "Safe & Sanitized",
      desc: "Child-proofed design, soft safety-flooring, round corner furniture, and thorough daily sanitization schedules.",
      icon: <ShieldCheck size={28} strokeWidth={2.2} />,
      bgColor: "#e8f5e9",
      borderColor: "#4caf50",
    },
  ];

  return (
    <section className="trust-section" id="trust">
      {/* Decorative illustrations */}
      <div className="trust-deco-butterfly">
        <Image
          src="/assets/butterfly.png"
          alt=""
          width={70}
          height={70}
          priority={false}
        />
      </div>
      <div className="trust-deco-rocket">
        <Image
          src="/assets/rocket.png"
          alt=""
          width={70}
          height={70}
          priority={false}
        />
      </div>

      <div className="trust-header">
        <span className="trust-tag">Why parents trust us</span>
        <h2>Why Parents Trust R&apos; Saplings</h2>
        <p>
          We provide a premium, safe, and stimulating space where child-first
          care meets a progressive foundation curriculum.
        </p>
      </div>

      <div className="trust-content-container">
        {/* Left Column: Large Image Container & Badge */}
        <div className="trust-image-container">
          <div className="trust-image-wrapper">
            <Image
              src="/assets/whyparentsChooseUs/IMG_8927.jpg"
              alt="Happy preschool kids learning together at R'saplings"
              fill
              sizes="(max-width: 992px) 100vw, 450px"
              className="trust-large-img"
              priority={false}
            />
          </div>
          <div className="trust-floating-badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#ffb300"
              stroke="#ffb300"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="trust-badge-icon"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>200+ Happy Parents</span>
          </div>
        </div>

        {/* Right Column: Cards Grid */}
        <div className="trust-grid">
          {reasons.map((item, idx) => (
            <div key={idx} className="trust-card">
              <div
                className="trust-icon-wrapper"
                style={{
                  backgroundColor: item.bgColor,
                  border: `2px solid ${item.borderColor}`,
                  color: item.borderColor,
                }}
              >
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
