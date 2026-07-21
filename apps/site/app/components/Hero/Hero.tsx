import {
  Button,
  Flex,
  Stack,
  Typography,
} from "@repo/ui";

export function Hero() {
  return (
    <Stack spacing="6" align="center">
      <Typography variant="display-lg">
        Building the Future
        <br />
        of African Commerce.
      </Typography>

      <Typography variant="body-lg">
        We're building a commerce platform where businesses,
        creators and communities grow together.
        <br />
        <br />
        Before we launch, we're inviting people across Africa
        to help shape what we build.
      </Typography>

      <Flex gap="4" justify="center">
        <Button>
          Become a Founding Voice
        </Button>

        <Button variant="secondary">
          Help Shape DUWEM
        </Button>
      </Flex>
    </Stack>
  );
}