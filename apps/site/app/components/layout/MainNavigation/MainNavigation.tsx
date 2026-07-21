import Link from "next/link";

import styles from "./MainNavigation.module.css";

export function MainNavigation() {
  return (
    <nav className={styles.navigation}>
      <Link href="#our-why">Our Why</Link>

      <Link href="#roadmap">Roadmap</Link>

      <Link href="#community">Community</Link>

      <Link href="#field-notes">Field Notes</Link>
    </nav>
  );
}