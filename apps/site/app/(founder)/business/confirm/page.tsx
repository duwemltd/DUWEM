"use client";

import { useRouter } from "next/navigation";

import { Typography } from "@repo/ui";

import {
  ConversationLayout,
  JourneyQuestion,
} from "../../../components/journey";

export default function BusinessConfirmPage() {
  const router = useRouter();

  return (
    <ConversationLayout
      step={5}
      total={5}
      title="Become a DUWEM Founding Voice"
      description={
        <Typography variant="body-lg">
          You're about to join the businesses helping shape the future of African commerce.
        </Typography>
      }
      showBack
      nextLabel="Confirm & Join"
      onNext={() => router.push("/business/contact")}
    >
      <JourneyQuestion
        title=""
        description=""
      >
        <Typography>
          ✓ Your feedback will directly influence what we build.
        </Typography>

        <Typography>
          ✓ You'll receive product updates.
        </Typography>

        <Typography>
          ✓ You'll get early access to new features.
        </Typography>

        <Typography>
          ✓ You'll become one of DUWEM's founding businesses.
        </Typography>
      </JourneyQuestion>
    </ConversationLayout>
  );
}