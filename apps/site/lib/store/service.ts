import { adminClient } from "../supabase/admin";

import type { Store } from "./types";

interface CreateStoreInput {
  merchantId: string;
  name: string;
}

function createSlug(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function createStore(
    input: CreateStoreInput
    ): Promise<Store> {

    const existing = await getStoreByMerchant(
        input.merchantId
    );

    if (existing) {
        return existing;
    }

    const { data, error } = await adminClient
        .from("stores")
        .insert({
        merchant_id: input.merchantId,
        name: input.name,
        slug: createSlug(input.name),
        })
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data as Store;
}

export async function getStoreByMerchant(
  merchantId: string
): Promise<Store | null> {
  const { data, error } = await adminClient
    .from("stores")
    .select("*")
    .eq("merchant_id", merchantId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data as Store | null;
}