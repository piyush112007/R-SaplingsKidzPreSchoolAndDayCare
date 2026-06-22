import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="nav-logo" style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <Image
          src="/assets/logoWbg.png"
          alt="R' Saplings KidZ PreSchool & DayCare Logo"
          width={280}
          height={90}
          priority
          className="logo-img"
        />
      </Link>

      <ul className="nav-links">
        <li><Link href="/about">Our Roots</Link></li>
        <li><Link href="/gallery">Life at R'saplings</Link></li>
        <li><Link href="/testimonials">Parents Echoes</Link></li>
      </ul>

      <Link href="/contact" className="nav-btn">
        Join our Family
      </Link>
    </nav>
  );
}