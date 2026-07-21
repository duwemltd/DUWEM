import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export async function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  console.log("SUPABASE_URL defined:", !!url);
  console.log("SUPABASE_ANON_KEY defined:", !!key);

  if (!url) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL is missing");
  }

  if (!key) {
    throw new Error("NEXT_PUBLIC_SUPABASE_ANON_KEY is missing");
  }

  const cookieStore = await cookies();

  return createServerClient(url, key, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set() {},
      remove() {},
    },
  });
}