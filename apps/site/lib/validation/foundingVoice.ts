import { z } from "zod";

export const FoundingVoiceSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Your name is required."),

  businessName: z
    .string()
    .trim()
    .min(2, "Business name is required."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  phone: z
    .string()
    .trim()
    .optional(),

  answers: z.record(
    z.string(),
    z.union([
      z.string(),
      z.array(z.string()),
    ])
  ),

  startedAt: z.string(),

  completedAt: z.string().optional(),
});

export type FoundingVoiceInput =
  z.infer<typeof FoundingVoiceSchema>;