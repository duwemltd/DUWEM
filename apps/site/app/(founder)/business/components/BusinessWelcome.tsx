import Link from "next/link";
import {
  Button,
  Stack,
  Typography,
} from "@repo/ui";

export function BusinessWelcome() {
  return (
    <Stack
      spacing="6"
      align="center"
    >
      <Typography variant="display-lg">
        Welcome 👋
      </Typography>

      <Typography variant="body-lg">
        Thank you for choosing to become
        one of DUWEM's Founding Voices.
      </Typography>

      <Typography variant="body-lg">
        We're building DUWEM alongside
        business owners across Africa—
        not behind closed doors.
      </Typography>

      <Typography variant="body-lg">
        Before we build more features,
        we'd love to understand your
        experience.
      </Typography>

      <Typography variant="body-lg">
        This conversation takes about
        five minutes.
      </Typography>

      <Link href="/business/conversation">
        <Button>
          Let's Begin
        </Button>
      </Link>
    </Stack>
  );
}