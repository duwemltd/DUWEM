import type { HTMLAttributes, ReactNode } from "react";

export interface NavbarProps
  extends HTMLAttributes<HTMLElement> {
  logo?: ReactNode;

  navigation?: ReactNode;

  actions?: ReactNode;
}