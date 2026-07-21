import type { ReactNode } from "react";

import {
  Stack,
  Typography,
} from "@repo/ui";

interface JourneyHeaderProps {
  title: string;
  children?: ReactNode;
}

export function JourneyHeader({
  title,
  children,
}: JourneyHeaderProps) {
  return (
    <Stack
      spacing="4"
      align="center"
    >
      <Typography variant="display-lg">
        {title}
      </Typography>

      {children}
    </Stack>
  );
}