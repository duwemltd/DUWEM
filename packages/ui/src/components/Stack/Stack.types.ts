import type { HTMLAttributes } from "react";

export interface StackProps
  extends HTMLAttributes<HTMLDivElement> {
  spacing?:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "8"
    | "10";

  align?:
    | "start"
    | "center"
    | "end"
    | "stretch";
}