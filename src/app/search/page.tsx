import { categoryService, productService } from "@/lib/di/container";
import { CategoryGrid } from "@/modules/category/presentation/CategoryGrid";
import { ProductGrid } from "@/modules/product/presentation/ProductGrid";
import { SearchX } from "lucide-react";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ s?: string; type?: "category" | string }>;
}) {
  const { s = "", type = "" } = await searchParams;
  const products =
    type && type === "category"
      ? await categoryService.findCategoryBySlug.execute(s)
      : await productService.searchProducts.execute(s);

  if (!products || !products.length) return <EmptySearch query={s} />;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}

const EmptySearch = ({ query }: { query: string }) => (
  <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
      <SearchX className="h-10 w-10 text-gray-400" aria-hidden />
    </div>

    <h1 className="mt-6 text-2xl font-semibold tracking-tight text-gray-900">
      No se encontró ningún producto
    </h1>

    {query && (
      <p className="mt-2 text-sm text-gray-500">
        No hay resultados para{" "}
        <span className="font-medium text-gray-700">“{query}”</span>
      </p>
    )}

    <p className="mt-6 text-sm text-gray-600">
      Te recomendamos buscar en las siguientes categorías:
    </p>

    <div className="mt-6 w-full">
      <CategoryGrid />
    </div>
  </section>
);
