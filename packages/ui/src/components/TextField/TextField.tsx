import type { JSX } from "react";

import { Typography } from "../Typography";

import type { TextFieldProps } from "./TextField.types";

export function TextField({
  label,
  error,
  ...props
}: TextFieldProps): JSX.Element {
  return (
    <label
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <Typography variant="body-md">
        {label}
      </Typography>

      <input
        {...props}
        style={{
          padding: "12px 16px",
          borderRadius: 12,
          border: "1px solid #D1D5DB",
          fontSize: 16,
        }}
      />

      {error && (
        <Typography variant="caption">
          {error}
        </Typography>
      )}
    </label>
  );
}