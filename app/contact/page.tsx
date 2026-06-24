"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending inquiry
    setFormSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main style={{ minHeight: "80vh", backgroundColor: "#ffffff" }}>
        {/* Contact Hero */}
        <section style={{
          backgroundColor: "#e3f2fd", // soft sky blue
          padding: "5rem 10% 7rem",
          position: "relative",
          textAlign: "center",
          overflow: "hidden"
        }}>
          <div style={{ position: "relative", zIndex: 2, maxWidth: "800px", margin: "0 auto" }}>
            <span style={{
              background: "#1e88e5",
              color: "white",
              padding: "6px 16px",
              borderRadius: "20px",
              fontSize: "0.9rem",
              fontWeight: "bold"
            }}>
              START THE ADVENTURE
            </span>
            <h1 style={{ fontSize: "3.5rem", color: "#0d47a1", marginTop: "1.5rem", marginBottom: "1.5rem", fontFamily: "var(--font-headings)" }}>
              Join our Family
            </h1>
            <p style={{ fontSize: "1.2rem", color: "#1565c0", lineHeight: "1.6", fontWeight: "500" }}>
              Ready to see where the magic happens? Schedule a visit, ask questions, or enroll your child.
              We can&apos;t wait to meet you and your little one!
            </p>
          </div>

          {/* Cloud SVG separator */}
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", lineHeight: 0 }}>
            <svg viewBox="0 0 1440 100" style={{ width: "100%", height: "60px", fill: "#ffffff" }}>
              <path d="M0,80 Q240,110 480,80 T960,80 T1440,80 L1440,100 L0,100 Z" />
            </svg>
          </div>
        </section>

        {/* Contact Layout */}
        <section style={{ padding: "4rem 10% 8rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "50px",
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            {/* Left Column: Info & Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              <div>
                <h2 style={{ fontSize: "2.2rem", color: "#23327a", marginBottom: "1.5rem", fontFamily: "var(--font-headings)" }}>
                  Get In Touch
                </h2>
                <p style={{ color: "#455a64", lineHeight: "1.6", fontSize: "1.05rem", marginBottom: "20px" }}>
                  Have questions about our curriculum, safety measures, or daily schedule? Contact our administration office directly or drop by for a tour.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "15px", background: "#f8f9fa", padding: "20px", borderRadius: "20px" }}>
                  <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                    <div style={{ fontSize: "2rem", background: "#fff", padding: "10px", borderRadius: "15px", boxShadow: "0 4px 10px rgba(0,0,0,0.03)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e88e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <h4 style={{ color: "#23327a", fontSize: "1.1rem", marginBottom: "3px" }}>Our Nest Location</h4>
                      <p style={{ color: "#546e7a", fontSize: "0.95rem", lineHeight: "1.4" }}>
                        Shop No. 1 & 2, Silver Star City,<br />
                        Plot No.408, Silicon City,<br />
                        Indore, Madhya Pradesh 452012
                      </p>
                      <a href="https://maps.app.goo.gl/fXbCQA6yWfnVKbu48" target="_blank" rel="noopener noreferrer" style={{ color: "#1e88e5", fontSize: "0.9rem", fontWeight: "bold", display: "inline-block", marginTop: "5px", textDecoration: "none" }}>Get Directions &rarr;</a>
                    </div>
                  </div>
                  <iframe 
                    src="https://maps.google.com/maps?q=Silver%20Star%20City,%20Silicon%20City,%20Indore,%20Madhya%20Pradesh%20452012&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="200" 
                    style={{ border: 0, borderRadius: '15px' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map Location"
                  ></iframe>
                </div>

                <div style={{ display: "flex", gap: "20px", alignItems: "center", background: "#f8f9fa", padding: "20px", borderRadius: "20px" }}>
                  <div style={{ fontSize: "2rem", background: "#fff", padding: "10px", borderRadius: "15px", boxShadow: "0 4px 10px rgba(0,0,0,0.03)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e88e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <h4 style={{ color: "#23327a", fontSize: "1.1rem", marginBottom: "3px" }}>Email Us</h4>
                    <p style={{ color: "#546e7a", fontSize: "0.95rem" }}>hello@rsaplingskidz.com</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "20px", alignItems: "center", background: "#f8f9fa", padding: "20px", borderRadius: "20px" }}>
                  <div style={{ fontSize: "2rem", background: "#fff", padding: "10px", borderRadius: "15px", boxShadow: "0 4px 10px rgba(0,0,0,0.03)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e88e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h4 style={{ color: "#23327a", fontSize: "1.1rem", marginBottom: "3px" }}>Call Support</h4>
                    <p style={{ color: "#546e7a", fontSize: "0.95rem" }}>+91 97709 67699</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "20px", alignItems: "center", background: "#f8f9fa", padding: "20px", borderRadius: "20px" }}>
                  <div style={{ fontSize: "2rem", background: "#fff", padding: "10px", borderRadius: "15px", boxShadow: "0 4px 10px rgba(0,0,0,0.03)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e88e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <h4 style={{ color: "#23327a", fontSize: "1.1rem", marginBottom: "3px" }}>Learning Hours</h4>
                    <p style={{ color: "#546e7a", fontSize: "0.95rem" }}>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div style={{
              background: "#ffffff",
              padding: "2.5rem",
              borderRadius: "30px",
              boxShadow: "0 15px 35px rgba(0,0,0,0.06)",
              border: "3px solid #e3f2fd"
            }}>
              {formSubmitted ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "2rem 0" }}>
                  <div style={{ color: "#4caf50", marginBottom: "1rem" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                  </div>
                  <h3 style={{ fontSize: "1.8rem", color: "#23327a", marginTop: "1rem", marginBottom: "1rem", fontFamily: "var(--font-headings)" }}>
                    Inquiry Received!
                  </h3>
                  <p style={{ color: "#546e7a", lineHeight: "1.6", marginBottom: "2rem" }}>
                    Thank you for reaching out to us. A member of our admissions team will contact you shortly to answer your questions or schedule a private tour.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    style={{
                      background: "#ff6b2b",
                      color: "white",
                      border: "none",
                      padding: "10px 24px",
                      borderRadius: "25px",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      cursor: "pointer"
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <h3 style={{ fontSize: "1.6rem", color: "#23327a", marginBottom: "10px", fontFamily: "var(--font-headings)" }}>
                    Admissions & Tour Inquiry
                  </h3>

                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <label style={{ fontSize: "0.9rem", fontWeight: "600", color: "#546e7a" }}>Name</label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      value={formData.parentName}
                      onChange={handleInputChange}
                      placeholder="e.g. Emma Watson"
                      className="contact-input"
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                      <label style={{ fontSize: "0.9rem", fontWeight: "600", color: "#546e7a" }}>Child Name</label>
                      <input
                        type="text"
                        name="childName"
                        required
                        value={formData.childName}
                        onChange={handleInputChange}
                        placeholder="e.g. Leo"
                        className="contact-input"
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                      <label style={{ fontSize: "0.9rem", fontWeight: "600", color: "#546e7a" }}>Child Age</label>
                      <input
                        type="text"
                        name="childAge"
                        required
                        value={formData.childAge}
                        onChange={handleInputChange}
                        placeholder="e.g. 3 years"
                        className="contact-input"
                      />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <label style={{ fontSize: "0.9rem", fontWeight: "600", color: "#546e7a" }}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 97709 67699"
                      className="contact-input"
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <label style={{ fontSize: "0.9rem", fontWeight: "600", color: "#546e7a" }}>Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any specific questions or desired schedule for your tour..."
                      className="contact-input"
                      style={{ resize: "vertical" }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: "#ff6b2b",
                      color: "white",
                      border: "none",
                      padding: "14px",
                      borderRadius: "15px",
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      cursor: "pointer",
                      boxShadow: "0 5px 0 #d84d14",
                      transition: "all 0.2s ease",
                      marginTop: "10px"
                    }}
                    className="submit-btn-hover"
                  >
                    Book tour & Submit inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
