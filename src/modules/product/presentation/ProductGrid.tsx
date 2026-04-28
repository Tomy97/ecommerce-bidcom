import type { Product } from "../domain/product.entity";
import { ProductCard } from "./ProductCard";

export const ProductGrid = ({ products }: { products: Product[] }) => (
  <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    {products.map((p, i) => (
      <ProductCard key={p.sku} product={p} priority={i === 0} />
    ))}
  </div>
);
