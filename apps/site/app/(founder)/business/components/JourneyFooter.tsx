import {
  Flex,
  Typography,
} from "@repo/ui";

export function JourneyFooter() {
  return (
    <Flex
      justify="between"
      align="center"
    >
      <Typography variant="caption">
        Step 1 of 6
      </Typography>

      <Typography variant="caption">
        Business Founder Journey
      </Typography>
    </Flex>
  );
}