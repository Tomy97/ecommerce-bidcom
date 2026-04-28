import { DummyJsonProductRepository } from "@/modules/product/infrastructure/dummyjson/dummyjson.product.repository";
import { SearchProductsUseCase } from "@/modules/product/application/search-products.use-case";
import { FindProductBySkuUseCase } from "@/modules/product/application/find-product-by-sku.use-case";
import { ListProductsUseCase } from "@/modules/product/application/list-products.use-case";
import { DummyjsonCategoryRepository } from "@/modules/category/infrastructure/dummyjson.category.repository";
import { ListCategoriesUseCase } from "@/modules/category/application/list-categories.use-cases";
import { FindCategoryBySlugUseCase } from "@/modules/category/application/find-category-by-slug.use-cases";

const productRepository = new DummyJsonProductRepository();
const categoryRepository = new DummyjsonCategoryRepository();
export const productService = {
  listProducts: new ListProductsUseCase(productRepository),
  searchProducts: new SearchProductsUseCase(productRepository),
  findProductBySku: new FindProductBySkuUseCase(productRepository),
};

export const categoryService = {
  listCategories: new ListCategoriesUseCase(categoryRepository),
  findCategoryBySlug: new FindCategoryBySlugUseCase(categoryRepository),
};
