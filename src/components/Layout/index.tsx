import Link from "next/link";
import React, { ReactNode } from "react";
import styles from "./style.module.css";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div>
        <div className={`container ${styles.nav}`}>
          <div className={styles.title}>
            <h2>High Value Books</h2>
            <p>
              Do the hard work, <span>especially</span> when you don&apos;t feel
              like it
            </p>
          </div>

          <nav className={styles.navLinks}>
            <Link href={"/"}>💸</Link>
          </nav>

          
        </div>
      </div>

      {children}

      <footer>
        <div className={`container ${styles.footer}`}>
          <p>
            made with ❤️ by{" "}
            <Link
              href={"https://linki-seven.vercel.app"}
              target="_blank"
              rel="noopener noreferrer"
            >
              stef
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
