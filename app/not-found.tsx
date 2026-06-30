import Image from "next/image";
import Link from "next/link";
import styles from "./not-found.module.css";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <main className={styles.container}>
        {/* Decorative Assets */}

        <Image
          src="/assets/doodle_rainbow.png"
          alt="Rainbow"
          width={400}
          height={250}
          className={styles.rainbow}
          priority
        />

        <Image
          src="/assets/flower1.png"
          alt="Flower"
          width={250}
          height={450}
          className={styles.flower}
          priority
        />

        <Image
          src="/assets/bat.png"
          alt="Butterfly"
          width={90}
          height={90}
          className={styles.butterfly}
          priority
        />

        <Image
          src="/assets/Ball.png"
          alt="Ball"
          width={80}
          height={80}
          className={styles.ball}
          priority
        />

        <Image
          src="/assets/rocket.png"
          alt="Rocket"
          width={90}
          height={90}
          className={styles.rocket}
          priority
        />

        <Image
          src="/assets/fish.png"
          alt="Fish"
          width={90}
          height={90}
          className={styles.fish}
          priority
        />

        <div className={styles.content}>
          <h1 className={styles.code}>404</h1>

          <h2 className={styles.title}>Oops! Page Not Found</h2>

          <p className={styles.description}>
            The page you're looking for doesn't exist or may have been moved.
          </p>

          <Link href="/" className={styles.button}>
            Go Back Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
