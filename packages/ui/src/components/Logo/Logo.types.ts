import type { HTMLAttributes } from "react";

export interface LogoProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: "brand" | "wordmark" | "compact";
}