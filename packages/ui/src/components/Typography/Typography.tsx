import type { JSX } from "react";
import type { TypographyProps } from "./Typography.types";

export function Typography({
  children,
  variant = "body-md",
}: TypographyProps): JSX.Element {
  switch (variant) {
    case "display-lg":
      return <h1>{children}</h1>;

    case "display-md":
      return <h1>{children}</h1>;

    case "display-sm":
      return <h2>{children}</h2>;

    case "h1":
      return <h1>{children}</h1>;

    case "h2":
      return <h2>{children}</h2>;

    case "h3":
      return <h3>{children}</h3>;

    case "body-lg":
      return <p>{children}</p>;

    case "body-sm":
      return <small>{children}</small>;

    case "caption":
      return <span>{children}</span>;

    default:
      return <p>{children}</p>;
  }
}