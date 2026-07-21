import { Container, Section, Stack } from "@repo/ui";

import { HelpShapeHeader } from "./HelpShapeHeader";
import { RoleGrid } from "./RoleGrid";

export function HelpShape() {
  return (
    <Section id="community">
  <Container>
    <Stack spacing="8">
      <HelpShapeHeader />

      <RoleGrid />
    </Stack>
  </Container>
</Section>
  );
}