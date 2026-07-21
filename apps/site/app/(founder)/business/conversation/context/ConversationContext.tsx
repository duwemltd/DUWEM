"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface ConversationContextValue {
  currentStep: number;
  setCurrentStep: (step: number) => void;

  answers: Record<number, string | string[]>;

  setAnswers: (
    answers:
      | Record<number, string | string[]>
      | ((
          previous: Record<number, string | string[]>
        ) => Record<number, string | string[]>)
  ) => void;
}

const ConversationContext =
  createContext<ConversationContextValue | null>(
    null
  );

export function ConversationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentStep, setCurrentStep] =
    useState(0);

  const [answers, setAnswers] =
    useState<
      Record<number, string | string[]>
    >({});

  return (
    <ConversationContext.Provider
      value={{
        currentStep,
        setCurrentStep,

        answers,
        setAnswers,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
}

export function useConversation() {
  const context =
    useContext(ConversationContext);

  if (!context) {
    throw new Error(
      "useConversation must be used inside ConversationProvider."
    );
  }

  return context;
}