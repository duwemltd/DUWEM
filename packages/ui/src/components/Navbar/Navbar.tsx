import type { JSX } from "react";
import type { NavbarProps } from "./Navbar.types";

import styles from "./Navbar.module.css";

export function Navbar({
  logo,
  navigation,
  actions,
  className = "",
  ...props
}: NavbarProps): JSX.Element {
  return (
    <header
      className={[
        styles.navbar,
        className,
      ].join(" ")}
      {...props}
    >
      <div className={styles.logo}>
        {logo}
      </div>

      <nav className={styles.navigation}>
        {navigation}
      </nav>

      <div className={styles.actions}>
        {actions}
      </div>
    </header>
  );
}