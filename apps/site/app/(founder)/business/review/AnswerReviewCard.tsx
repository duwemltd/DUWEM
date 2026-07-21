import {
  Stack,
  Typography,
} from "@repo/ui";

interface AnswerReviewCardProps {
  icon?: string;

  title: string;

  answers: string[];
}

export function AnswerReviewCard({
  icon,
  title,
  answers,
}: AnswerReviewCardProps) {
  return (
    <div
        style={{
        border: "1px solid #E5E7EB",
        borderRadius: 16,
        padding: 24,
        background: "#FFFFFF",
        }}
    >
        <Stack spacing="4">
        <Typography variant="h3">
            {icon ? `${icon} ` : ""}
            {title}
        </Typography>

        <Stack spacing="3">
            {answers.map((answer) => (
            <Typography key={answer}>
                • {answer}
            </Typography>
            ))}
        </Stack>
        </Stack>
    </div>
    );
}