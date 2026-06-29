import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.container}>
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
  );
}
