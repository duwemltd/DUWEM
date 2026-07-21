import Link from "next/link";

import {
  Button,
  Card,
  Stack,
  Typography,
} from "@repo/ui";

interface BusinessWelcomePageProps {
  searchParams: Promise<{
    fv?: string;
  }>;
}

export default async function BusinessWelcomePage({
  searchParams,
}: BusinessWelcomePageProps) {
  const { fv } = await searchParams;

  return (
    <Stack spacing="8">
      <Typography variant="display-sm">
        🎉 You're officially a Founding Voice!
      </Typography>

      <Typography variant="body-lg">
        Thank you for joining the first community helping
        shape the future of African commerce.
      </Typography>

      <Card>
        <Stack spacing="4">
          <Typography variant="caption">
            Your Founding Voice ID
          </Typography>

          <Typography variant="h2">
            {fv ?? "Pending"}
          </Typography>

          <Typography variant="body-sm">
            Keep this ID. We'll use it when inviting you
            to future DUWEM activities.
          </Typography>
        </Stack>
      </Card>

      <Card>
        <Stack spacing="4">
          <Typography variant="h3">
            What happens next?
          </Typography>

          <Typography variant="body-md">
            • We'll review all Founding Voice applications.
          </Typography>

          <Typography variant="body-md">
            • Early members will receive product updates and
            preview invitations.
          </Typography>

          <Typography variant="body-md">
            • You'll have opportunities to influence new
            features before public launch.
          </Typography>
        </Stack>
      </Card>

      <Typography variant="body-md">
        Your insights will directly influence how DUWEM is
        built for African businesses.
      </Typography>

      <Link href="/">
        <Button fullWidth>
          Return Home
        </Button>
      </Link>
    </Stack>
  );
}