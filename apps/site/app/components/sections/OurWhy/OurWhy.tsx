import { Container, Section, Stack } from "@repo/ui";

import { OurWhyHeadline } from "./OurWhyHeadline";
import { OurWhyStory } from "./OurWhyStory";

export function OurWhy() {
  return (
    <Section id="our-why">
      <Container>
        <Stack spacing="8">
          <OurWhyHeadline />

          <OurWhyStory />
        </Stack>
      </Container>
    </Section>
  );
}