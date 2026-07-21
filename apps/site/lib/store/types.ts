export interface Store {
  id: string;

  merchant_id: string;

  name: string;

  slug: string;

  description: string | null;

  logo_url: string | null;

  cover_image_url: string | null;

  status: "active" | "inactive";

  created_at: string;
}