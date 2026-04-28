import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { SearchBar } from "@/shared/components/SearchBar";

describe("SearchBar", () => {
  it("should render the search bar", () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    expect(getByPlaceholderText("¿Qué estás buscando?")).toBeInTheDocument();
  });

  it("should render the search bar with a default value", () => {
    const { getByPlaceholderText } = render(<SearchBar defaultValue="test" />);
    expect(getByPlaceholderText("¿Qué estás buscando?")).toHaveValue("test");
  });

  it("should render the search bar with a search icon", () => {
    const { getByLabelText } = render(<SearchBar />);
    expect(getByLabelText("Buscar")).toBeInTheDocument();
  });

  it("should render button with type submit", () => {
    const { getByRole } = render(<SearchBar />);
    expect(getByRole("button")).toHaveAttribute("type", "submit");
  });

  it("should render form with action /search", () => {
    const { getByRole } = render(<SearchBar />);
    expect(getByRole("form")).toHaveAttribute("action", "/search");
  });
});