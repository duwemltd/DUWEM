import { adminClient } from "../supabase/admin";

import type { Organization } from "./types";

interface CreateOrganizationInput {
  name: string;
  slug: string;
}

export async function createOrganization(
  input: CreateOrganizationInput
): Promise<Organization> {
  const { data, error } = await adminClient
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