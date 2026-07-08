import type { JSX } from "react";
import type { GridProps } from "./Grid.types";

import styles from "./Grid.module.css";

export function Grid({
  children,
  columns = 3,
  gap = "6",
  className = "",
  ...props
}: GridProps): JSX.Element {
  return (
    <div
      className={[
        styles.grid,
        styles[`cols-${columns}`],
        styles[`gap-${gap}`],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}