import type { Product, ProductDetail } from "./product.entity";

export interface ProductRepository {
  getProducts(): Promise<Product[]>;
  searchProducts(search: string): Promise<Product[]>;
  findBySku(sku: string): Promise<ProductDetail | null>;
}
