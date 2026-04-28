import type { ProductDetail } from "../domain/product.entity";
import { ProductInfo } from "./ProductInfo";
import { ProductGallery } from "./ProductGallery";

export const ProductDetailView = ({ product }: { product: ProductDetail }) => (
  <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
      <ProductGallery images={product.images} title={product.title} />
      <ProductInfo product={product} />
    </div>
  </main>
);
