import { Product } from "../domain/product.entity";
import { ProductRepository } from "../domain/product.repository";

export class SearchProductsUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(search: string): Promise<Product[]> {
    return this.productRepository.searchProducts(search);
  }
}
