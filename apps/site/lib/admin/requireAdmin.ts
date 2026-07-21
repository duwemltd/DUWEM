import { createClient } from "../supabase/server";
import { adminClient } from "../supabase/admin";

function getClient() {
  if (!adminClient) {
    throw new Error("Supabase admin client is not configured.");
  }

  return adminClient;
}

export async function requireAdmin() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const client = getClient();

  const { data: admin } = await client
    .from("admins")
    .select("id")
    .eq("id", user.id)
    .single();

  if (!admin) {
    throw new Error("Unauthorized");
  }

  return user;
}