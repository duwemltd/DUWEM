interface CreateProductInput {
  storeId: string;
  name: string;
  description?: string;
  sku?: string;
  price: number;
}