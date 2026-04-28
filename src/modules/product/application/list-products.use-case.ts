import { Product } from "../domain/product.entity";
import { ProductRepository } from "../domain/product.repository";

export class ListProductsUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    return this.productRepository.getProducts();
  }
}
