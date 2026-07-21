"use client";

import { useRouter } from "next/navigation";

import { useFoundingConversationStore } from "../../../../stores/foundingConversationStore";
import { ChoiceQuestion } from "./ChoiceQuestion";

import { Typography } from "@repo/ui";

import {
  ConversationLayout,
  JourneyQuestion,
} from "../../../components/journey";

import { questions } from "./data";

export function BusinessConversation() {
    const router = useRouter();
    const {
    currentStep,
    setCurrentStep,
    answers,
    setAnswer,
    } = useFoundingConversationStore();

  const question = questions[currentStep];

    if (!question) {
        return null;
    }
    const selectedChoice =
        question
            ? answers[question.id] ?? null
            : null;

  return (
    <ConversationLayout
        step={currentStep + 1}
        total={questions.length}
        title={question.sectionTitle}
        description={
            <Typography variant="body-lg">
                {question.sectionDescription}
            </Typography>
        }
        showBack={currentStep > 0}
        nextDisabled={!selectedChoice}
        nextLabel={
            currentStep === questions.length - 1
                ? "Review Answers"
                : "Next"
            }
        onBack={() => {
            if (currentStep > 0) {
                setCurrentStep(currentStep - 1);
            }
        }}
        onNext={() => {
            if (!question) {
                return;
            }

            if (currentStep < questions.length - 1) {
                setCurrentStep(currentStep + 1);
                return;
            }

            router.push("/business/review");
        }}
        >
        <JourneyQuestion
            title={question.title}
            description={question.description}
            >
            <ChoiceQuestion
                question={question}
                value={selectedChoice}
                onChange={(value) =>
                    setAnswer(question.id, value)
                }
            />
        </JourneyQuestion>
    </ConversationLayout>
  );
}