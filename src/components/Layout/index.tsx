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
            <h2>High Value Books 💸</h2>
            <p>
              Do the hard work, <span>especially</span> when you don&apos;t feel
              like it
            </p>
          </div>

          <nav className={styles.navLinks}>
            <Link href={"/"}>All</Link>
            <Link href={"/alex-hormozi"}>Hormozi</Link>
            <Link href={"/hamza-ahmed"}>Hamza</Link>
            <Link href={"/iman-gadzhi"}>Iman</Link>
          </nav>

          
        </div>
      </div>

      {children}

      <footer>
        <div className={`container ${styles.footer}`}>
          <p>
            made with ❤️ by{" "}
            <Link
              href={"https://github.com/sord-dev"}
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
