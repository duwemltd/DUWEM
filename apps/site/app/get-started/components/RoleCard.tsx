import Link from "next/link";

import {
  Button,
  Card,
  Stack,
  Typography,
} from "@repo/ui";

interface RoleCardProps {
  emoji: string;
  title: string;
  description: string;
  href: string;
}

export function RoleCard({
  emoji,
  title,
  description,
  href,
}: RoleCardProps) {
  return (
    <Card>
      <Stack spacing="4">
        <Typography variant="display-sm">
          {emoji}
        </Typography>

        <Typography variant="h3">
          {title}
        </Typography>

        <Typography variant="body-md">
          {description}
        </Typography>

        <Link href={href}>
          <Button fullWidth>
              Start Here →
          </Button>
        </Link>
      </Stack>
    </Card>
  );
}