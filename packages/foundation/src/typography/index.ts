import { fontFamily } from "./fontFamily";
import { fontSize } from "./fontSize";
import { fontWeight } from "./fontWeight";
import { lineHeight } from "./lineHeight";

export * from "./fontFamily";
export * from "./fontSize";
export * from "./fontWeight";
export * from "./lineHeight";

export const typography = {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} as const;