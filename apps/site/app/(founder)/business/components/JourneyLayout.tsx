import { Container, Section } from "@repo/ui";
import type { ReactNode } from "react";

interface JourneyLayoutProps {
  children: ReactNode;
}

export function JourneyLayout({
  children,
}: JourneyLayoutProps) {
  return (
    <Section>
      <Container>
        {children}
      </Container>
    </Section>
  );
}