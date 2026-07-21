import { adminClient } from "../supabase/admin";
import type { Merchant } from "./types";

interface CreateMerchantInput {
  foundingVoiceId: string;
  businessName: string;
  ownerName: string;
  email: string;
  phone: string | null;
}

export async function createMerchant(
  input: CreateMerchantInput
): Promise<Merchant> {
  const { data, error } = await adminClient
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
  const { data, error } = await adminClient
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
  const { data, error } = await adminClient
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
  const { data, error } = await adminClient
    .from("merchants")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data as Merchant | null;
}