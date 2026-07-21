import { adminClient } from "../supabase/admin";

import type { Product } from "./types";

interface CreateProductInput {
  storeId: string;
  name: string;
  description?: string;
  sku?: string;
  price: number;
}