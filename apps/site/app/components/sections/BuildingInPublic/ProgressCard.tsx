import { Badge, Card, Stack, Typography } from "@repo/ui";

interface ProgressCardProps {
  title: string;
  status: string;
  description: string;
}

export function ProgressCard({
  title,
  status,
  description,
}: ProgressCardProps) {
  return (
    <Card>
        <Stack spacing="4">
        <Badge>{status}</Badge>

        <Typography variant="h3">
          {title}
        </Typography>

        <Typography variant="body-md">
          {description}
        </Typography>
      </Stack>
    </Card>
  );
}