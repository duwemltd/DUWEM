import type { JSX } from "react";
import type { TextareaProps } from "./Textarea.types";

import styles from "./Textarea.module.css";

export function Textarea({
  label,
  helperText,
  error,
  fullWidth = false,
  className = "",
  id,
  ...props
}: TextareaProps): JSX.Element {
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

      <textarea
        id={id}
        className={[
          styles.textarea,
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