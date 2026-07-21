"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Button,
  Input,
  Stack,
  Typography,
} from "@repo/ui";

import {
  ConversationLayout,
  JourneyQuestion,
} from "../../../components/journey";

import { useFoundingConversationStore } from "../../../../stores/foundingConversationStore";

export default function BusinessContactPage() {
  const router = useRouter();

  const {
    contact,
    answers,
    startedAt,
    completedAt,
    setContact,
    markCompleted,
    reset
  } = useFoundingConversationStore();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleSubmit() {
    setError("");
    setLoading(true);

    try {
      const completedAt = new Date().toISOString();

      markCompleted();

      const response = await fetch(
        "/api/founding-voices",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            ...contact,
            answers,
            startedAt,
            completedAt,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ??
            "Unable to submit application."
        );
      }
      reset();
      router.push(
        `/business/welcome?fv=${result.foundingVoiceId}`
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <ConversationLayout
      step={6}
      total={6}
      title="Let's Stay Connected"
      description={
        <Typography variant="body-lg">
          We'd love to keep you updated as DUWEM grows.
        </Typography>
      }
      showBack
      nextLabel=""
    >
      <JourneyQuestion
        title="Almost done"
        description="Tell us how we can reach you."
      >
        <Stack spacing="6">
          <Input
            label="Your Name"
            placeholder="John Doe"
            value={contact.name}
            onChange={(event) =>
              setContact({
                name: event.target.value,
              })
            }
            fullWidth
          />

          <Input
            label="Business Name"
            placeholder="Acme Stores"
            value={contact.businessName}
            onChange={(event) =>
              setContact({
                businessName:
                  event.target.value,
              })
            }
            fullWidth
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            value={contact.email}
            onChange={(event) =>
              setContact({
                email: event.target.value,
              })
            }
            fullWidth
          />

          <Input
            label="Phone Number (Optional)"
            placeholder="+234..."
            value={contact.phone}
            onChange={(event) =>
              setContact({
                phone: event.target.value,
              })
            }
            fullWidth
          />

          {error && (
            <Typography>
              {error}
            </Typography>
          )}

          <Button
            fullWidth
            loading={loading}
            disabled={
              loading ||
              !contact.name ||
              !contact.businessName ||
              !contact.email
            }
            onClick={handleSubmit}
          >
            Join DUWEM
          </Button>
        </Stack>
      </JourneyQuestion>
    </ConversationLayout>
  );
}