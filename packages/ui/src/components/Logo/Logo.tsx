import type { JSX } from "react";
import type { LogoProps } from "./Logo.types";

import styles from "./Logo.module.css";

export function Logo({
  variant = "brand",
  className = "",
  ...props
}: LogoProps): JSX.Element {
  if (variant === "wordmark") {
    return (
      <div className={[styles.logo, className].join(" ")} {...props}>
        <span className={styles.wordmark}>DUWEM</span>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={[styles.logo, className].join(" ")} {...props}>
        <span className={styles.icon}>◆</span>
        <span className={styles.wordmark}>DUWEM</span>
      </div>
    );
  }

  return (
    <div className={[styles.logo, className].join(" ")} {...props}>
      <span className={styles.icon}>◆</span>

      <div className={styles.text}>
        <span className={styles.wordmark}>DUWEM</span>

        <span className={styles.tagline}>
          Building trusted commerce for Africa.
        </span>
      </div>
    </div>
  );
}