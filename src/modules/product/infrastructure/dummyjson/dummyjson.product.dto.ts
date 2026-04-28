export type DummyjsonProductSummaryDto = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  sku: string;
};

export type DummyjsonProductDetailDto = DummyjsonProductSummaryDto & {
  description: string;
  brand?: string;
  category: string;
  images: string[];
  rating: number;
  stock: number;
  availabilityStatus: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  weight: number;
  tags: string[];
  warrantyInformation: string;
  shippingInformation: string;
  returnPolicy: string;
  discountPercentage: number;
};

export type DummyjsonProductSearchResponseDto = {
  products: DummyjsonProductSummaryDto[];
  total: number;
  skip: number;
  limit: number;
};
