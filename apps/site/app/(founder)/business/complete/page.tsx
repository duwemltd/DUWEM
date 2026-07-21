import {
  Typography,
  Button,
} from "@repo/ui";

import {
  JourneyHeader,
  JourneyLayout,
} from "../../../components/journey";

export default function BusinessCompletePage() {
  return (
    <JourneyLayout>
      <JourneyHeader
        title="Welcome to the Founding Voices"
      >
        <Typography variant="body-lg">
          Thank you for helping shape DUWEM.
        </Typography>

        <Typography variant="body-lg">
          Your insights will directly influence
          what we build next.
        </Typography>

        <Typography variant="body-lg">
          This is only the beginning.
        </Typography>
      </JourneyHeader>

      <Button>
        Explore What's Next
      </Button>
    </JourneyLayout>
  );
}