import Link from "next/link";
import type { Category } from "../domain/category.entity";

export const CategoryPill = ({ category }: { category: Category }) => (
  <Link
    href={`/search?s=${category.slug}&type=category`}
    className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium capitalize text-gray-700 transition hover:border-[#0000FF] hover:bg-blue-50 hover:text-[#0000FF] hover:shadow-sm"
  >
    {category.name}
  </Link>
);
