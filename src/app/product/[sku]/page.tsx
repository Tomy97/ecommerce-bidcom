import { productService } from "@/lib/di/container";
import { ProductDetailView } from "@/modules/product/presentation/ProductDetailView";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ sku: string }>;
}) {
  const { sku } = await params;
  const product = await productService.findProductBySku.execute(sku);
  if (!product) notFound();

  return <ProductDetailView product={product} />;
}
