export type Product = {
  sku: string;
  title: string;
  price: number;
  image: string;
};

export type ProductDimensions = {
  width: number;
  height: number;
  depth: number;
};

export type ProductDetail = Product & {
  description: string;
  brand: string;
  category: string;
  images: string[];
  rating: number;
  stock: number;
  availabilityStatus: string;
  dimensions: ProductDimensions;
  weight: number;
  tags: string[];
  warrantyInformation: string;
  shippingInformation: string;
  returnPolicy: string;
  discountPercentage: number;
};
