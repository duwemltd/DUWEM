import { adminClient } from "../supabase/admin";
import { createMerchant } from "../merchant/service";
import { createStore } from "../store/service";

function getClient() {
  if (!adminClient) {
    throw new Error("Supabase admin client is not configured.");
  }

  return adminClient;
}

export async function getFoundingVoices() {
  const client = getClient();

  const { data, error } = await client
    .from("founding_voices")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data;
}

export async function getFoundingVoice(
  foundingVoiceId: string
) {
  const client = getClient();

  const { data, error } = await client
    .from("founding_voices")
    .select("*")
    .eq("founding_voice_id", foundingVoiceId)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function updateFoundingVoiceStatus(
  foundingVoiceId: string,
  status: "approved" | "rejected"
) {
  const client = getClient();

  const { data, error } = await client
    .from("founding_voices")
    .update({
      status,
    })
    .eq("founding_voice_id", foundingVoiceId)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function approveFoundingVoice(
  foundingVoiceId: string
) {
  // Load the application
  const voice = await getFoundingVoice(
    foundingVoiceId
  );

  // Update its status
  const updated = await updateFoundingVoiceStatus(
    foundingVoiceId,
    "approved"
  );

  // Create the merchant
  const merchant = await createMerchant({
    foundingVoiceId: voice.founding_voice_id,
    businessName: voice.business_name,
    ownerName: voice.name,
    email: voice.email,
    phone: voice.phone,
  });

  await createStore({
    merchantId: merchant.id,
    name: merchant.business_name,
  });

  return updated;
}