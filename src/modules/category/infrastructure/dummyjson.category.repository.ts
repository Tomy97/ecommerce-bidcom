import { Product } from "@/modules/product/domain/product.entity";
import { Category } from "../domain/category.entity";
import { CategoryRepository } from "../domain/category.repository";
import { DummyjsonCategoryListResponseDto } from "./dummyjson.category.dto";
import { DummyjsonProductSearchResponseDto, DummyjsonProductSummaryDto } from "@/modules/product/infrastructure/dummyjson/dummyjson.product.dto";

export class DummyjsonCategoryRepository implements CategoryRepository {
  private readonly URL_BASE = "https://dummyjson.com";

  async listCategories(): Promise<Category[]> {
    const response = await fetch(`${this.URL_BASE}/products/categories`);
    const data: DummyjsonCategoryListResponseDto = await response.json();
    return data;
  }

  async findBySlug(slug: string): Promise<Product[] | null> {
    const response = await fetch(`${this.URL_BASE}/products/category/${slug}`);
    const data: DummyjsonProductSearchResponseDto = await response.json();
    return data.products.map(this.toProduct);
  }
  
  private toProduct(dto: DummyjsonProductSummaryDto): Product {
    return {
      sku: dto.sku,
      title: dto.title,
      price: dto.price,
      image: dto.thumbnail,
    };
  }
}
