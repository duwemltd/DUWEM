import type { JSX } from "react";
import type { InputProps } from "./Input.types";

import styles from "./Input.module.css";

export function Input({
  label,
  helperText,
  error,
  fullWidth = false,
  className = "",
  id,
  ...props
}: InputProps): JSX.Element {
  return (
    <div
      className={[
        styles.wrapper,
        fullWidth ? styles.fullWidth : "",
      ].join(" ")}
    >
      {label && (
        <label
          htmlFor={id}
          className={styles.label}
        >
          {label}
        </label>
      )}

      <input
        id={id}
        className={[
          styles.input,
          error ? styles.error : "",
          className,
        ].join(" ")}
        {...props}
      />

      {error ? (
        <span className={styles.errorText}>
          {error}
        </span>
      ) : (
        helperText && (
          <span className={styles.helperText}>
            {helperText}
          </span>
        )
      )}
    </div>
  );
}