import { formatMoney } from "@/shared/utils/formatMoney";
import { ProductDetail } from "../domain/product.entity";

export const ProductInfo = ({ product }: { product: ProductDetail }) => (
  <div className="flex flex-col">
    <span className="inline-flex w-fit items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
      {product.brand}
    </span>

    <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
      {product.title}
    </h1>

    <div className="mt-3 flex items-baseline gap-2">
      <span className="text-3xl font-semibold text-gray-900">
        {formatMoney(product.price)}
      </span>
    </div>

    <p className="mt-6 text-sm leading-relaxed text-gray-700">
      {product.description}
    </p>

    <dl className="mt-8 divide-y divide-gray-200 border-y border-gray-200 text-sm">
      <Spec label="Categoría" value={product.category} capitalize />
      <Spec
        label="Medidas"
        value={`${product.dimensions.width} × ${product.dimensions.height} × ${product.dimensions.depth} cm`}
      />
      <Spec label="Peso" value={`${product.weight} kg`} />
      <Spec label="Calificación" value={`${product.rating.toFixed(2)} / 5`} />
      <Spec label="Stock" value={`${product.stock} unidades`} />
      <Spec label="Garantía" value={product.warrantyInformation} />
      <Spec label="Envío" value={product.shippingInformation} />
      <Spec label="Devoluciones" value={product.returnPolicy} />
    </dl>
  </div>
);

const Spec = ({
  label,
  value,
  capitalize = false,
}: {
  label: string;
  value: string;
  capitalize?: boolean;
}) => (
  <div className="flex justify-between gap-4 py-3">
    <dt className="text-gray-500">{label}</dt>
    <dd
      className={`text-right text-gray-900 ${capitalize ? "capitalize" : ""}`}
    >
      {value}
    </dd>
  </div>
);
