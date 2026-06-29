import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer" id="about">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: Logo, Tagline, Socials & Badges */}
          <div className="footer-brand-col">
            <Link href="/" className="footer-logo-link">
              <Image
                src="/assets/logoWbg.png"
                alt="R' Saplings KidZ PreSchool & DayCare Logo"
                width={260}
                height={80}
                style={{ objectFit: "contain" }}
                className="footer-logo-img"
              />
            </Link>
            <p className="footer-description">
              A nurturing space filled with love, play, and discovery—where
              young minds blossom into their full potential.
            </p>
            {/* Social Links */}
            <div className="footer-socials">
              <a
                href="https://wa.me/919770967699"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaWhatsapp size={20} />
              </a>

              <a
                href="https://www.instagram.com/r.saplings.kidz/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaInstagram size={20} />
              </a>
            </div>
            {/* Certification Badges */}
            <div className="footer-badges">
              <span className="footer-badge">✓ EYFS Curriculum</span>
              <span className="footer-badge">✓ Live CCTV Enabled</span>
            </div>
          </div>

          {/* Column 2: Our Nest */}
          <div className="footer-col">
            <h4>Our Nest</h4>
            <ul>
              <li>
                <Link href="/">The Nest (Home)</Link>
              </li>
              <li>
                <Link href="/about">Our Roots</Link>
              </li>
              <li>
                <Link href="/Programs">Programs</Link>
              </li>
              <li>
                <Link href="/gallery">Life at R'saplings</Link>
              </li>
              <li>
                <Link href="/testimonials">Parents Echoes</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Learning Paths */}
          <div className="footer-col">
            <h4>Learning Paths</h4>
            <ul>
              <li>
                <Link href="/about#learning">Toddler Program</Link>
              </li>
              <li>
                <Link href="/about#learning">Preschool Program</Link>
              </li>
              <li>
                <Link href="/about#learning">Kindergarten</Link>
              </li>
              <li>
                <Link href="/about#learning">Daycare Program</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Families */}
          <div className="footer-col">
            <h4>Families</h4>
            <ul>
              <li>
                <Link href="/contact">Book a Tour</Link>
              </li>
              <li>
                <Link href="/contact">Admissions</Link>
              </li>
              <li>
                <Link href="/testimonials">Parent Feedback</Link>
              </li>
              <li>
                <Link href="/about">Our Team</Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Say Hello */}
          <div className="footer-col footer-contact-col">
            <h4>Say Hello</h4>
            <ul>
              <li className="contact-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="contact-icon-svg"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  Shop 1 & 2, Silver Star City,
                  <br />
                  Plot 408, Silicon City,
                  <br />
                  Indore, MP 452012
                </span>
              </li>
              <li className="contact-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="contact-icon-svg"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+919770967699">+91 97709 67699</a>
              </li>
              <li className="contact-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="contact-icon-svg"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a href="mailto:hello@rsaplingskidz.com">
                  hello@rsaplingskidz.com
                </a>
              </li>
              <li className="contact-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="contact-icon-svg"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Mon-Fri: 8:30 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()}
            <span> R&apos; Saplings KidZ PreSchool & DayCare.</span>
          </p>

          <Link href="https://www.antilabs.in/">
            {" "}
            Made with <span className="heart-love">❤️</span> by{" "}
            <b>Antilabs</b>{" "}
          </Link>
          {/* <div className="footer-bottom-links">
            <Link href="/terms">Terms of Use</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
