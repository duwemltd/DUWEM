import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log("ADMIN URL:", !!url);
console.log("ADMIN SERVICE KEY:", !!serviceKey);

if (!url) {
  throw new Error("NEXT_PUBLIC_SUPABASE_URL is missing");
}

if (!serviceKey) {
  throw new Error("SUPABASE_SERVICE_ROLE_KEY is missing");
}

export const adminClient = createClient(url, serviceKey);