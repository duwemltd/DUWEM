import { createClient } from "../supabase/server";
import { adminClient } from "../supabase/admin";

export async function requireAdmin() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const { data: admin } = await adminClient
    .from("admins")
    .select("id")
    .eq("id", user.id)
    .single();

  if (!admin) {
    throw new Error("Unauthorized");
  }

  return user;
}