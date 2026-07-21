import { adminClient } from "./supabase/admin";
import type { FoundingVoiceInput } from "./validation/foundingVoice";

export interface FoundingVoiceRecord {
  id: string;
  founding_voice_id: string;
  created_at: string;

  name: string;
  business_name: string;
  email: string;
  phone: string | null;

  answers: Record<string, string | string[]>;
  started_at: string;
  completed_at: string | null;
}

function getClient() {
  if (!adminClient) {
    throw new Error("Supabase admin client is not configured.");
  }

  return adminClient;
}

export async function createFoundingVoice(
  input: FoundingVoiceInput
): Promise<FoundingVoiceRecord> {
  const client = getClient();

  const { data, error } = await client
    .from("founding_voices")
    .insert({
      name: input.name,
      business_name: input.businessName,
      email: input.email,
      phone: input.phone,
      answers: input.answers,
      started_at: input.startedAt,
      completed_at:
        input.completedAt ??
        new Date().toISOString(),
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data as FoundingVoiceRecord;
}