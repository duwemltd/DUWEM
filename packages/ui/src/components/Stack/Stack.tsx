import type { JSX } from "react";
import type { StackProps } from "./Stack.types";

import styles from "./Stack.module.css";

export function Stack({
  spacing = "4",
  align = "stretch",
  className = "",
  children,
  ...props
}: StackProps): JSX.Element {
  return (
    <div
      className={[
        styles.stack,
        styles[`spacing-${spacing}`],
        styles[`align-${align}`],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}