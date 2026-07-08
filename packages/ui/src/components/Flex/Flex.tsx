import type { JSX } from "react";
import type { FlexProps } from "./Flex.types";

import styles from "./Flex.module.css";

export function Flex({
  children,
  gap = "4",
  justify = "start",
  align = "stretch",
  wrap = false,
  className = "",
  ...props
}: FlexProps): JSX.Element {
  return (
    <div
      className={[
        styles.flex,
        styles[`gap-${gap}`],
        styles[`justify-${justify}`],
        styles[`align-${align}`],
        wrap ? styles.wrap : "",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}