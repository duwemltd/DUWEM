import { adminClient } from "../supabase/admin";
import type { Organization } from "./types";

interface CreateOrganizationInput {
  name: string;
  slug: string;
}

function getClient() {
  if (!adminClient) {
    throw new Error("Supabase admin client is not configured.");
  }

  return adminClient;
}

export async function createOrganization(
  input: CreateOrganizationInput
): Promise<Organization> {
  const client = getClient();

  const { data, error } = await client
    .from("organizations")
    .insert({
      name: input.name,
      slug: input.slug,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data as Organization;
}