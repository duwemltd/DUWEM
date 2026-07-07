import { success } from "../primitives/success";
import { warning } from "../primitives/warning";
import { error } from "../primitives/error";
import { info } from "../primitives/info";

export const status = {
  success: success[600],
  warning: warning[600],
  error: error[600],
  info: info[600],
} as const;