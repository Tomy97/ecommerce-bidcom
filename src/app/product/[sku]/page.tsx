import { productService } from "@/lib/di/container";
import { ProductGallery } from "@/modules/product/presentation/ProductGallery";
import { ProductInfo } from "@/modules/product/presentation/ProductInfo";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ sku: string }>;
}) {
  const { sku } = await params;
  const product = await productService.findProductBySku.execute(sku);
  if (!product) notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <ProductGallery images={product.images} title={product.title} />
        <ProductInfo product={product} />
      </div>
    </main>
  );
}
