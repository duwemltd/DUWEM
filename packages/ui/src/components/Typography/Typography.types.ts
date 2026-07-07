import type { ReactNode } from "react";

export type TypographyVariant =
  | "display-lg"
  | "display-md"
  | "display-sm"
  | "h1"
  | "h2"
  | "h3"
  | "body-lg"
  | "body-md"
  | "body-sm"
  | "caption";

export interface TypographyProps {
  children: ReactNode;
  variant?: TypographyVariant;
}