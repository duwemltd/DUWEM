import type { JSX } from "react";
import type { CardProps } from "./Card.types";

import styles from "./Card.module.css";

export function Card({
  children,
  hover = true,
  padding = "md",
  className = "",
  ...props
}: CardProps): JSX.Element {
  return (
    <div
      className={[
        styles.card,
        styles[padding],
        hover ? styles.hover : "",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}