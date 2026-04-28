import type { Product, ProductDetail } from "../../domain/product.entity";
import type {
  DummyjsonProductDetailDto,
  DummyjsonProductSummaryDto,
} from "./dummyjson.product.dto";

export const toProduct = (dto: DummyjsonProductSummaryDto): Product => ({
  sku: dto.sku,
  title: dto.title,
  price: dto.price,
  image: dto.thumbnail,
});

export const toProductDetail = (dto: DummyjsonProductDetailDto): ProductDetail => ({
  ...toProduct(dto),
  description: dto.description,
  brand: dto.brand ?? "Sin marca",
  category: dto.category,
  images: dto.images?.length ? dto.images : [dto.thumbnail],
  rating: dto.rating,
  stock: dto.stock,
  availabilityStatus: dto.availabilityStatus,
  dimensions: dto.dimensions,
  weight: dto.weight,
  tags: dto.tags,
  warrantyInformation: dto.warrantyInformation,
  shippingInformation: dto.shippingInformation,
  returnPolicy: dto.returnPolicy,
  discountPercentage: dto.discountPercentage,
});
