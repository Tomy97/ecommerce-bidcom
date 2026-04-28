import type { Product, ProductDetail } from "../../domain/product.entity";
import type { ProductRepository } from "../../domain/product.repository";
import type {
  DummyjsonProductDetailDto,
  DummyjsonProductSearchResponseDto,
} from "./dummyjson.product.dto";
import { toProduct, toProductDetail } from "./dummyjson.product.mapper";

export class DummyJsonProductRepository implements ProductRepository {
  private readonly URL_BASE = "https://dummyjson.com";
  private readonly SUMMARY_FIELDS = "title,price,thumbnail,sku";

  async getProducts(): Promise<Product[]> {
    const url = `${this.URL_BASE}/products?limit=20&select=${this.SUMMARY_FIELDS}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`DummyJson list failed: ${res.status}`);
    const data: DummyjsonProductSearchResponseDto = await res.json();
    return data.products.map(toProduct);
  }

  async searchProducts(search: string): Promise<Product[]> {
    const url = `${this.URL_BASE}/products/search?q=${encodeURIComponent(search)}&limit=20&select=${this.SUMMARY_FIELDS}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`DummyJson search failed: ${res.status}`);
    const data: DummyjsonProductSearchResponseDto = await res.json();
    return data.products.map(toProduct);
  }

  async findBySku(sku: string): Promise<ProductDetail | null> {
    const id = this.extractDummyJsonId(sku);
    if (id === null) return null;

    const res = await fetch(`${this.URL_BASE}/products/${id}`);
    if (!res.ok) return null;

    const dto: DummyjsonProductDetailDto = await res.json();
    if (dto.sku !== sku) return null;
    return toProductDetail(dto);
  }

  private extractDummyJsonId(sku: string): number | null {
    const last = sku.split("-").at(-1);
    if (!last) return null;
    const id = Number(last);
    return Number.isInteger(id) && id > 0 ? id : null;
  }
}
