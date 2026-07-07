import React from "react";

export interface TypographyProps {
  children: React.ReactNode;
}

export function Typography({ children }: TypographyProps) {
  return <p>{children}</p>;
}