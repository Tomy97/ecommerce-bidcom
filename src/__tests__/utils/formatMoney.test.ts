import { describe, it, expect } from "vitest";

import { formatMoney } from "../../shared/utils/formatMoney";

describe("formatMoney", () => {
  it("should format money correctly", () => {
    expect(formatMoney(9.99)).toBe('$ 9,99');
  });

  it("should format money with 0 decimal places", () => {
    expect(formatMoney(0)).toBe("$ 0,00");
  });
});
