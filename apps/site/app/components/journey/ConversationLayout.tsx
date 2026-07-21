import type { ReactNode } from "react";

import { Stack } from "@repo/ui";

import { JourneyLayout } from "./JourneyLayout";
import { JourneyProgress } from "./JourneyProgress";
import { JourneyHeader } from "./JourneyHeader";
import { JourneyNavigation } from "./JourneyNavigation";

interface ConversationLayoutProps {
  step: number;
  total: number;

  title: string;

  description?: ReactNode;

  children: ReactNode;

  showBack?: boolean;

  nextLabel?: string;

  nextDisabled?: boolean;

  onBack?: () => void;
  onNext?: () => void;
}

export function ConversationLayout({
  step,
  total,
  title,
  description,
  children,

  showBack = true,

  nextLabel = "Next",

  nextDisabled = false,

  onBack,
  onNext,
}: ConversationLayoutProps) {
  return (
    <JourneyLayout>
      <Stack spacing="8">
        <JourneyProgress
          step={step}
          total={total}
        />

        <JourneyHeader title={title}>
            {description}
        </JourneyHeader>

        {children}

        <JourneyNavigation
          showBack={showBack}
          nextLabel={nextLabel}
          nextDisabled={nextDisabled}
          onBack={onBack}
          onNext={onNext}
        />
      </Stack>
    </JourneyLayout>
  );
}