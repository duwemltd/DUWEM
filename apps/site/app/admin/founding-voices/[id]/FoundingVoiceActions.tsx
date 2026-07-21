"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button, Stack } from "@repo/ui";

interface Props {
  foundingVoiceId: string;
}

export function FoundingVoiceActions({
  foundingVoiceId,
}: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function updateStatus(
    status: "approved" | "rejected"
  ) {
    setLoading(true);

    const response = await fetch(
        `/api/admin/founding-voices/${foundingVoiceId}`,
        {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ status }),
        }
        );

        if (!response.ok) {
        alert("Unable to update application.");
        setLoading(false);
        return;
        }

        router.refresh();
        setLoading(false);
  }

  return (
    <div
        style={{
            display: "flex",
            gap: 16,
        }}
    >
      <Button
        loading={loading}
        onClick={() => updateStatus("approved")}
      >
        Approve
      </Button>

      <Button
        variant="secondary"
        loading={loading}
        onClick={() => updateStatus("rejected")}
      >
        Reject
      </Button>
    </div>
  );
}