import { Stack, ChoiceCard } from "@repo/ui";

import type { ChoiceQuestion as ChoiceQuestionType } from "./data";

interface ChoiceQuestionProps {
  question: ChoiceQuestionType;

  value: string | string[] | null;

  onChange: (value: string | string[]) => void;
}

export function ChoiceQuestion({
  question,
  value,
  onChange,
}: ChoiceQuestionProps) {
  return (
    <Stack spacing="4">
      {question.options.map((option) => (
        <ChoiceCard
          key={option.id}
          selected={
            Array.isArray(value)
                ? value.includes(option.id)
                : value === option.id
            }
            onClick={() => {
            if (question.multiple) {
                const current = Array.isArray(value)
                ? value
                : [];

                if (current.includes(option.id)) {
                onChange(
                    current.filter((id) => id !== option.id)
                );
                } else {
                onChange([
                    ...current,
                    option.id,
                ]);
                }
            } else {
                onChange(option.id);
            }
            }}
          icon={option.icon ?? "•"}
          title={option.title}
          description={option.description}
        />
      ))}
    </Stack>
  );
}