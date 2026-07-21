import Link from "next/link";

import { Button, Flex } from "@repo/ui";

export function HeroActions() {
  return (
    <Flex gap="4" justify="center">
      <Link href="/get-started">
        <Button>
          Become a Founding Voice
        </Button>
      </Link>

      <Button variant="secondary">
        Read Our Vision
      </Button>
    </Flex>
  );
}