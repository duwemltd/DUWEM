import { notFound } from "next/navigation";

import { getFoundingVoice } from "../../../../lib/admin/foundingVoices";

import { InfoRow } from "../../components/InfoRow";
import { AdminCard } from "../../components/AdminCard";
import { StatusBadge } from "../../components/StatusBadge";
import { FoundingVoiceActions } from "./FoundingVoiceActions";
import { questions } from "../../../../lib/founding-voices/questions";
import {
  questionsById,
} from "../../../../lib/founding-voices/questions";
import { AdminSection } from "../../components/AdminSection";
import { QuestionCard } from "../../components/QuestionCard";
console.log("QuestionsById:", questionsById);

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const labels: Record<string, string> = {
  businessCategory: "Business Category",
  yearsInBusiness: "Years in Business",
  monthlyOrders: "Monthly Orders",
  biggestChallenge: "Biggest Challenge",
  paymentMethods: "Payment Methods",
  deliveryMethod: "Delivery Method",
  socialMedia: "Social Media",
  sellOnline: "Currently Selling Online",
};

export default async function FoundingVoicePage({
  params,
}: Props) {
  const { id } = await params;

  let voice;

  try {
    voice = await getFoundingVoice(id);
  } catch {
    notFound();
  }

  return (
    <>
      <h1
        style={{
          color: "white",
          marginBottom: 24,
        }}
      >
        {voice.name}
      </h1>

      <AdminCard>

        <div
          style={{
            display: "grid",
            gap: 20,
          }}
        >
          <InfoRow
            label="Business"
            value={voice.business_name}
            />

            <InfoRow
            label="Email"
            value={voice.email}
            />

            <InfoRow
            label="Phone"
            value={voice.phone || "—"}
            />

            <InfoRow
            label="Status"
            value={
                <StatusBadge
                status={voice.status}
                />
            }
            />

            <InfoRow
            label="Founding Voice ID"
            value={voice.founding_voice_id}
            />

          <hr
            style={{
                margin: "32px 0",
                borderColor: "#2b3654",
            }}
            />

            <h2
            style={{
                marginBottom: 20,
                color: "white",
            }}
            >
            Questionnaire
            </h2>

            <div
            style={{
                display: "grid",
                gap: 24,
            }}
            >
            {questions.map((question) => {
                const answer = voice.answers?.[question.id];

                if (!answer) {
                    return null;
                }

                const values = Array.isArray(answer)
                    ? answer
                    : [answer];

                return (
                    <QuestionCard
                    key={question.id}
                    icon={question.reviewIcon}
                    title={question.reviewTitle ?? question.title}
                    >
                    {values.map((value) => {
                        const option = question.options.find(
                        (option) => option.id === value
                        );

                        return (
                        <InfoRow
                            key={value}
                            label="Answer"
                            value={option?.title ?? value}
                        />
                        );
                    })}
                    </QuestionCard>
                );
                })}
            </div>
                    <hr />

            <FoundingVoiceActions
            foundingVoiceId={voice.founding_voice_id}
          />

        </div>

      </AdminCard>
    </>
  );
}