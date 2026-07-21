export interface Merchant {
  id: string;

  founding_voice_id: string;
  user_id: string | null;

  owner_name: string;

  business_name: string;

  email: string;

  phone: string | null;

  status: "active" | "inactive";

  created_at: string;
}