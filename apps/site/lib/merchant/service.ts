import { adminClient } from "../supabase/admin";
import type { Merchant } from "./types";

interface CreateMerchantInput {
  foundingVoiceId: string;
  businessName: string;
  ownerName: string;
  email: string;
  phone: string | null;
}

function getClient() {
  if (!adminClient) {
    throw new Error("Supabase admin client is not configured.");
  }

  return adminClient;
}

export async function createMerchant(
  input: CreateMerchantInput
): Promise<Merchant> {
  const client = getClient();

  const { data, error } = await client
    .from("merchants")
    .insert({
      founding_voice_id: input.foundingVoiceId,
      business_name: input.businessName,
      owner_name: input.ownerName,
      email: input.email,
      phone: input.phone,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data as Merchant;
}

export async function getMerchants() {
  const client = getClient();

  const { data, error } = await client
    .from("merchants")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data as Merchant[];
}

export async function getMerchant(
  id: string
) {
  const client = getClient();

  const { data, error } = await client
    .from("merchants")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data as Merchant;
}

export async function getMerchantByUserId(
  userId: string
): Promise<Merchant | null> {
  const client = getClient();

  const { data, error } = await client
    .from("merchants")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data as Merchant | null;
}