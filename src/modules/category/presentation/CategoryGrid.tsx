import { CategoryPill } from "./CategoryPill";
import { categoryService } from "@/lib/di/container";

export const CategoryGrid = async () => {
  const categories = await categoryService.listCategories.execute({ limit: 5 });
  return (
    <ul className="flex items-center justify-center gap-7 flex-row flex-wrap">
      {categories.map((category) => (
        <li key={category.slug}>
          <CategoryPill category={category} />
        </li>
      ))}
    </ul>
  );
};
