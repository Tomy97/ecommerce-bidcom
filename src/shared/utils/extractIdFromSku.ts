export const extractIdFromSku = (sku: string): number | null => {
  const last = sku.split("-").at(-1);
  if (!last) return null;
  const id = Number(last);
  return Number.isInteger(id) && id > 0 ? id : null;
};
