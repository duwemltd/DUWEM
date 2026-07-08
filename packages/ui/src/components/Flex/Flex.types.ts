import type { HTMLAttributes } from "react";

export interface FlexProps
  extends HTMLAttributes<HTMLDivElement> {
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

  justify?:
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | "evenly";

  align?:
    | "start"
    | "center"
    | "end"
    | "stretch";

  wrap?: boolean;
}