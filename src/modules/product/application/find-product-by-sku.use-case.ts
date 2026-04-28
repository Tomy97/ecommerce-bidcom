import type { ProductDetail } from "../domain/product.entity";
import type { ProductRepository } from "../domain/product.repository";

export class FindProductBySkuUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  execute(sku: string): Promise<ProductDetail | null> {
    return this.productRepository.findBySku(sku);
  }
}
