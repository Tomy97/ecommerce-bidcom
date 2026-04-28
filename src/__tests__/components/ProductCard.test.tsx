import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { mockProduct } from "@/__tests__/mocks/product.mock";
import { ProductCard } from "@/modules/product/presentation/ProductCard";
import { formatMoney } from "@/shared/utils/formatMoney";
import { vi } from "vitest";

vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

describe("ProductCard", () => {
  it("should render the product card", () => {
    const { getByText } = render(<ProductCard product={mockProduct} />);
    expect(getByText(mockProduct.title)).toBeInTheDocument();
    expect(getByText(formatMoney(mockProduct.price))).toBeInTheDocument();
  });

  it("should render the product card with priority", () => {
    const { getByText } = render(<ProductCard product={mockProduct} priority />);
    expect(getByText(mockProduct.title)).toBeInTheDocument();
    expect(getByText(formatMoney(mockProduct.price))).toBeInTheDocument();
  });
});
