import type { JSX } from "react";
import type { SectionProps } from "./Section.types";

import styles from "./Section.module.css";

export function Section({
  className = "",
  children,
  ...props
}: SectionProps): JSX.Element {
  return (
    <section
      className={[styles.section, className].join(" ")}
      {...props}
    >
      {children}
    </section>
  );
}