import {
  Button,
  Stack,
  Typography,
} from "@repo/ui";

export function WelcomeStep() {
  return (
    <Stack spacing="6">
      <Typography variant="display-lg">
        Welcome 👋
      </Typography>

      <Typography variant="body-lg">
        Thank you for taking a few minutes to
        help shape DUWEM.
      </Typography>

      <Typography variant="body-lg">
        We're building Africa's next generation
        commerce platform alongside business
        owners like you.
      </Typography>

      <Typography variant="body-lg">
        Before we build more features,
        we'd love to learn from your experience.
      </Typography>

      <Typography variant="body-lg">
        This conversation takes about
        five minutes.
      </Typography>

      <Button>
        Let's Begin
      </Button>
    </Stack>
  );
}