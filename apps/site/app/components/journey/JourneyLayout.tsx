import type { ReactNode } from "react";

import {
  Container,
  Section,
  Stack,
} from "@repo/ui";

interface JourneyLayoutProps {
  children: ReactNode;
}

export function JourneyLayout({
  children,
}: JourneyLayoutProps) {
  return (
    <Section>
      <Container>
        <Stack
          spacing="8"
          align="center"
        >
          {children}
        </Stack>
      </Container>
    </Section>
  );
}