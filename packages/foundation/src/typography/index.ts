import { fonts } from "./fonts";
import { fontWeights } from "./weights";
import { fontSizes } from "./sizes";
import { lineHeights } from "./line-heights";
import { letterSpacing } from "./letter-spacing";

export * from "./fonts";
export * from "./weights";
export * from "./sizes";
export * from "./line-heights";
export * from "./letter-spacing";

export const typography = {
  fonts,
  fontWeights,
  fontSizes,
  lineHeights,
  letterSpacing,
} as const;