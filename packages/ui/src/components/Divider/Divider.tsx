import type { JSX } from "react";
import type { DividerProps } from "./Divider.types";

import styles from "./Divider.module.css";

export function Divider({
  className = "",
  ...props
}: DividerProps): JSX.Element {
  return (
    <hr
      className={[
        styles.divider,
        className,
      ].join(" ")}
      {...props}
    />
  );
}