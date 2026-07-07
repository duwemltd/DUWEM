import * as colors from "../colors";
import { typography } from "../typography";
import { spacingTokens } from "../spacing";
import { radius } from "../radius";
import { shadows } from "../shadows";

export const theme = {
  colors,
  typography,
  spacing: spacingTokens,
  radius,
  shadows,
} as const;