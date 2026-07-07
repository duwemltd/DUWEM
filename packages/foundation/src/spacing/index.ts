import { spacing } from "./scale";
import { spacingSemantic } from "./semantic";

export * from "./scale";
export * from "./semantic";

export const spacingTokens = {
  spacing,
  semantic: spacingSemantic,
} as const;