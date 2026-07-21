import type { JSX } from "react";
import type { BadgeProps } from "./Badge.types";

import styles from "./Badge.module.css";

export function Badge({
  children,
  variant = "default",
  className = "",
  ...props
}: BadgeProps): JSX.Element {
  return (
    <span
      className={[
        styles.badge,
        styles[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}