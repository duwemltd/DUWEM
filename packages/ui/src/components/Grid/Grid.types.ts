import type { HTMLAttributes } from "react";

export interface GridProps
  extends HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3 | 4 | 5 | 6;

  gap?:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "8"
    | "10";
}