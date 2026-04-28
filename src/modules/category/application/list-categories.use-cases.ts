import type { Category } from "../domain/category.entity";
import type { CategoryRepository } from "../domain/category.repository";

export class ListCategoriesUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute({ limit }: { limit?: number } = {}): Promise<Category[]> {
    const all = await this.categoryRepository.listCategories();
    return typeof limit === "number" ? all.slice(0, limit) : all;
  }
}
