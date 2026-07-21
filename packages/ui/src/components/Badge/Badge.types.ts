import type { HTMLAttributes, ReactNode } from "react";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;

  variant?:
    | "default"
    | "success"
    | "warning"
    | "error"
    | "info";
}