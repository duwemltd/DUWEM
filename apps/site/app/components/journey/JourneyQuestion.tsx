import type { ReactNode } from "react";

import {
  Stack,
  Typography,
} from "@repo/ui";

interface JourneyQuestionProps {
  title: string;

  description?: ReactNode;

  children: ReactNode;
}

export function JourneyQuestion({
  title,
  description,
  children,
}: JourneyQuestionProps) {
  return (
    <Stack spacing="6">
      <Typography variant="h2">
        {title}
      </Typography>

      {description && (
        <Typography variant="body-lg">
          {description}
        </Typography>
      )}

      {children}
    </Stack>
  );
}