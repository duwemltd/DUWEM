export interface Product {
  id: string;

  store_id: string;

  name: string;

  slug: string;

  description: string | null;

  sku: string | null;

  price: number;

  currency: string;

  status: "draft" | "published" | "archived";

  created_at: string;
}