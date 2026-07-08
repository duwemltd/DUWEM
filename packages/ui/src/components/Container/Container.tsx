import type { JSX } from "react";
import type { ContainerProps } from "./Container.types";

import styles from "./Container.module.css";

export function Container({
  className = "",
  children,
  ...props
}: ContainerProps): JSX.Element {
  return (
    <div
      className={[styles.container, className].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}