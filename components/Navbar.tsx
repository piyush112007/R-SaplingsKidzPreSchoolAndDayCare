"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navLogo} onClick={closeMenu}>
        <Image
          src="/assets/logoWbg.png"
          alt="R' Saplings KidZ PreSchool & DayCare Logo"
          width={280}
          height={90}
          priority
          className={styles.logoImg}
        />
      </Link>

      <button
        className={`${styles.hamburger} ${
          isOpen ? styles.hamburgerActive : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`${styles.navMenu} ${isOpen ? styles.navMenuActive : ""}`}
      >
        <ul className={styles.navLinks}>
          <li>
            <Link href="/about" onClick={closeMenu}>
              Our Roots
            </Link>
          </li>

          <li>
            <Link href="/programs" onClick={closeMenu}>
              Programs
            </Link>
          </li>

          <li>
            <Link href="/gallery" onClick={closeMenu}>
              Life at R&apos;Saplings
            </Link>
          </li>

          <li>
            <Link href="/testimonials" onClick={closeMenu}>
              Parents Echoes
            </Link>
          </li>
        </ul>

        <Link href="/contact" className={styles.navBtn} onClick={closeMenu}>
          Join our Family
        </Link>
      </div>
    </nav>
  );
}
