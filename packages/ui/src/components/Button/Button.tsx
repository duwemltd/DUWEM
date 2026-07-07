import type { JSX } from "react";
import type { ButtonProps } from "./Button.types";

import styles from "./Button.module.css";

export function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={[
        styles.button,
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : "",
        className,
      ].join(" ")}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        "Loading..."
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
}