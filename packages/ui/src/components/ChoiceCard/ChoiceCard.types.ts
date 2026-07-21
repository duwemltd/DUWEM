import type { HTMLAttributes, ReactNode } from "react";

export interface ChoiceCardProps
  extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;

  title: string;

  description?: string;

  selected?: boolean;
}