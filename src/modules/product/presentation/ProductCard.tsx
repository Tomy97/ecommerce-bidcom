import Link from "next/link";
import Image from "next/image";
import type { Product } from "../domain/product.entity";
import { formatMoney } from "@/shared/utils/formatMoney";

type Props = {
  product: Product;
  priority?: boolean;
};

export const ProductCard = ({ product, priority = false }: Props) => (
  <Link href={`/product/${product.sku}`} className="group">
    <Image
      src={product.image}
      alt={product.title}
      width={200}
      height={200}
      priority={priority}
      className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
    />
    <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
    <p className="mt-1 text-lg font-medium text-gray-900">
      {formatMoney(product.price)}
    </p>
  </Link>
);
