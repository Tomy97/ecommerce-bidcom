import { productService } from "@/lib/di/container";
import { ProductGrid } from "@/modules/product/presentation/ProductGrid";
export default async function Home() {
  const products = await productService.listProducts.execute();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
