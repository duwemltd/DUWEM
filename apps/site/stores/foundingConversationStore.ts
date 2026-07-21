import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ContactDetails {
  name: string;

  businessName: string;

  email: string;

  phone: string;
}

interface FoundingConversationState {
  currentStep: number;

  answers: Record<string, string | string[]>;

  contact: ContactDetails;

  startedAt: string;

  completedAt?: string;

  version: number;

  setCurrentStep: (step: number) => void;

  setAnswer: (
  questionId: string,
    answer: string | string[]
  ) => void;

  setContact: (
    values: Partial<ContactDetails>
  ) => void;

  markCompleted: () => void;

  reset: () => void;
}

export const useFoundingConversationStore =
  create<FoundingConversationState>()(
    persist(
      (set) => ({
        currentStep: 0,

        answers: {},

        contact: {
          name: "",
          businessName: "",
          email: "",
          phone: "",
        },

        startedAt: new Date().toISOString(),

        completedAt: undefined,

        version: 1,

        setCurrentStep: (step) =>
          set({
            currentStep: step,
          }),

        setAnswer: (
          questionId,
          answer
        ) =>
          set((state) => ({
            answers: {
              ...state.answers,
              [questionId]: answer,
            },
          })),

        setContact: (values) =>
          set((state) => ({
            contact: {
              ...state.contact,
              ...values,
            },
          })),

        markCompleted: () =>
          set({
            completedAt:
              new Date().toISOString(),
          }),

        reset: () =>
          set({
            currentStep: 0,

            answers: {},

            contact: {
              name: "",
              businessName: "",
              email: "",
              phone: "",
            },

            startedAt:
              new Date().toISOString(),

            completedAt: undefined,

            version: 1,
          }),
      }),
      {
        name: "founding-conversation",
      }
    )
  );