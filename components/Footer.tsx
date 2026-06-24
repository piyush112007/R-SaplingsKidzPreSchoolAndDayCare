import Image from "next/image";
import Link from "next/link";

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
              A nurturing space filled with love, play, and discovery—where young minds blossom into their full potential.
            </p>
            {/* Social Links */}
            <div className="footer-socials">
              <a href="https://wa.me/919770967699" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" clipRule="evenodd" d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79 1.04a7.9 7.9 0 0 0 7.933-7.917a7.9 7.9 0 0 0-2.326-5.7zM10.96 10.225c-.295-.148-1.748-.865-2.019-.964-.272-.099-.47-.149-.669.149-.198.299-.769.964-.943 1.163-.173.199-.349.224-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.299-.018-.46.13-.607.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.369-.025-.519-.075-.15-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/></svg>
              </a>
              <a href="https://www.instagram.com/r.saplings.kidz/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
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
              <li><Link href="/">The Nest (Home)</Link></li>
              <li><Link href="/about">Our Roots</Link></li>
              <li><Link href="/gallery">Life at R'saplings</Link></li>
              <li><Link href="/testimonials">Parents Echoes</Link></li>
            </ul>
          </div>

          {/* Column 3: Learning Paths */}
          <div className="footer-col">
            <h4>Learning Paths</h4>
            <ul>
              <li><Link href="/about#learning">Toddler Program</Link></li>
              <li><Link href="/about#learning">Preschool Program</Link></li>
              <li><Link href="/about#learning">Kindergarten</Link></li>
              <li><Link href="/about#learning">Daycare Program</Link></li>
            </ul>
          </div>

          {/* Column 4: Families */}
          <div className="footer-col">
            <h4>Families</h4>
            <ul>
              <li><Link href="/contact">Book a Tour</Link></li>
              <li><Link href="/contact">Admissions</Link></li>
              <li><Link href="/testimonials">Parent Feedback</Link></li>
              <li><Link href="/about">Our Team</Link></li>
            </ul>
          </div>

          {/* Column 5: Say Hello */}
          <div className="footer-col footer-contact-col">
            <h4>Say Hello</h4>
            <ul>
              <li className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon-svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>
                  Shop 1 & 2, Silver Star City,<br />
                  Plot 408, Silicon City,<br />
                  Indore, MP 452012
                </span>
              </li>
              <li className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon-svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+919770967699">+91 97709 67699</a>
              </li>
              <li className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon-svg"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <a href="mailto:hello@rsaplingskidz.com">hello@rsaplingskidz.com</a>
              </li>
              <li className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon-svg"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>Mon-Fri: 8:30 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} R&apos; Saplings KidZ PreSchool & DayCare. Made with <span className="heart-love">❤️</span> in Indore.
          </p>
          <div className="footer-bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}