import { Product } from "@/modules/product/domain/product.entity";
import { Category } from "./category.entity";

export interface CategoryRepository {
  listCategories(): Promise<Category[]>;
  findBySlug(slug: string): Promise<Product[] | null>;
}