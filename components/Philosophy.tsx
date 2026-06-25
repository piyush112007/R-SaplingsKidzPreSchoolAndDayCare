export default function Philosophy() {
  const pillars = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9c27b0"
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
      title: "Creative Expression",
      desc: "Children discover their unique talents through art, music, dance, storytelling, and imaginative play that inspires creativity and confidence.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4caf50"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
      title: "Play-Based Learning",
      desc: "Every day is filled with hands-on activities that spark curiosity, encourage exploration, and make learning a joyful experience through play.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3f51b5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Social Skills",
      desc: "Helping children build friendships, communicate confidently, and learn the values of kindness, teamwork, and respect.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff9800"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
      title: "Confidence",
      desc: "Empowering every child to embrace new challenges, make choices confidently, and believe in their unique abilities.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e91e63"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
      title: "Caring Educators",
      desc: "Our dedicated teachers provide personalized attention, gentle guidance, and constant encouragement to help every child thrive.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#009688"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
      title: "Parent Partnership",
      desc: "We believe the best learning happens when parents and teachers work together, celebrating every milestone in a child's early learning journey.",
    },
  ];

  return (
    <section className="pillars-section" id="learning">
      <div className="pillars-header">
        <span className="pillars-tag">OUR PHILOSOPHY</span>

        <h2>Our Learning Pillars</h2>

        <p className="pillars-subtitle">
          Every child grows through creativity, confidence, kindness and joyful
          learning experiences.
        </p>
      </div>

      <div className="pillars-grid">
        {pillars.map((pillar, index) => (
          <div key={index} className="pillar-card">
            <div className="pillar-icon">{pillar.icon}</div>

            <h3>{pillar.title}</h3>

            <p>{pillar.desc}</p>
          </div>
        ))}
      </div>
      <p className="pillar-footer">
        From little moments to big milestones, we&apos;re with your child every
        step of the way.
      </p>
    </section>
  );
}
