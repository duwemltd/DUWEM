import { Button, Card, Stack, Typography } from "@repo/ui";

interface RoleCardProps {
  emoji: string;
  title: string;
  description: string;
  action: string;
}

export function RoleCard({
  emoji,
  title,
  description,
  action,
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

        <Button fullWidth>
          {action}
        </Button>
      </Stack>
    </Card>
  );
}