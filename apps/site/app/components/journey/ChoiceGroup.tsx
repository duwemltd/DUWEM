import { Stack, ChoiceCard } from "@repo/ui";

interface ChoiceOption {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface ChoiceGroupProps {
  options: readonly ChoiceOption[];
  value: string | null;
  onChange: (value: string) => void;
}

export function ChoiceGroup({
  options,
  value,
  onChange,
}: ChoiceGroupProps) {
  return (
    <Stack spacing="4">
      {options.map((option) => (
        <ChoiceCard
          key={option.id}
          icon={option.icon}
          title={option.title}
          description={option.description}
          selected={value === option.id}
          onClick={() => onChange(option.id)}
        />
      ))}
    </Stack>
  );
}