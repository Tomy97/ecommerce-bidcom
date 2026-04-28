import { DummyJsonProductRepository } from "@/modules/product/infrastructure/dummyjson/dummyjson.product.repository";
import { SearchProductsUseCase } from "@/modules/product/application/search-products.use-case";
import { FindProductBySkuUseCase } from "@/modules/product/application/find-product-by-sku.use-case";
import { ListProductsUseCase } from "@/modules/product/application/list-products.use-case";

const productRepository = new DummyJsonProductRepository();

export const productService = {
  listProducts: new ListProductsUseCase(productRepository),
  searchProducts: new SearchProductsUseCase(productRepository),
  findProductBySku: new FindProductBySkuUseCase(productRepository),
};
