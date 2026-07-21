import { Button, Flex } from "@repo/ui";

interface JourneyNavigationProps {
  backLabel?: string;
  nextLabel?: string;

  showBack?: boolean;

  nextDisabled?: boolean;

  onBack?: () => void;
  onNext?: () => void;
}

export function JourneyNavigation({
  backLabel = "Back",
  nextLabel = "Next",

  showBack = true,

  nextDisabled = false,

  onBack,
  onNext,
}: JourneyNavigationProps) {
  return (
    <Flex justify="between">
      {showBack ? (
        <Button
          variant="ghost"
          onClick={onBack}
        >
          ← {backLabel}
        </Button>
      ) : (
        <div />
      )}

      <Button
        disabled={nextDisabled}
        onClick={onNext}
      >
        {nextLabel} →
      </Button>
    </Flex>
  );
}