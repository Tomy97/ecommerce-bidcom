import { Product } from "@/modules/product/domain/product.entity";
import { CategoryRepository } from "../domain/category.repository";

export class FindCategoryBySlugUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(slug: string): Promise<Product[] | null> {
    return this.categoryRepository.findBySlug(slug);
  }
}