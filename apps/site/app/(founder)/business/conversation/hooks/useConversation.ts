import { useState } from "react";

import { questions } from "../data";

export function useConversation() {
  const [currentStep, setCurrentStep] = useState(0);

  const [answers, setAnswers] = useState<
    Record<string, string | string[]>
  >({});

  const question = questions[currentStep];

  const selectedChoice =
    question
      ? answers[question.id] ?? null
      : null;

  return {
    currentStep,
    setCurrentStep,

    answers,
    setAnswers,

    question,

    selectedChoice,

    totalSteps: questions.length,
  };
}