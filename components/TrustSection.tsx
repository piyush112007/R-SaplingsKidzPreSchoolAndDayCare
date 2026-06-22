import Image from "next/image";

export default function TrustSection() {
  const reasons = [
    {
      title: "Live CCTV Webcast",
      desc: "Watch your child learn, play, and grow in real-time. We offer secure parent login access for absolute peace of mind.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9c27b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M2 12h3c.7 0 1.3-.3 1.7-.8l1.6-2.4a2.5 2.5 0 0 1 4.2 0l1.6 2.4c.4.5 1 .8 1.7.8h3"/><path d="M2 12c0-5 4-9 10-9s10 4 10 9-4 9-10 9-10-4-10-9Z"/></svg>
      ),
      bgColor: "#f3e5f5",
      borderColor: "#9c27b0",
    },
    {
      title: "EYFS Curriculum",
      desc: "Following the UK's Early Years Foundation Stage framework to support structured milestones and play-based learning.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
      ),
      bgColor: "#e3f2fd",
      borderColor: "#2196f3",
    },
    {
      title: "Loving Educators",
      desc: "Our certified teachers are specialized in early childhood care and use warm, nurturing, child-first methods.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e91e63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2a5.5 5.5 0 0 0-2 5.5l7 7Z"/></svg>
      ),
      bgColor: "#fce4ec",
      borderColor: "#e91e63",
    },
    {
      title: "Safe & Sanitized",
      desc: "Child-proofed design, soft safety-flooring, round corner furniture, and thorough daily sanitization schedules.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      ),
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
          We provide a premium, safe, and stimulating space where child-first care meets a progressive foundation curriculum.
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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#ffb300" stroke="#ffb300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="trust-badge-icon"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
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
