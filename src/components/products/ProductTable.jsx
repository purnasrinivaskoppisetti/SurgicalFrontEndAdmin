"use client";

import { useRouter } from "next/navigation";
import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

export default function ProductTable({
  products,
  onEditProduct,
  onDeleteProduct,
}) {
  const router = useRouter();

  return (
    <div className="bg-white border border-slate-300 rounded-xl overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-[#f8fafc] border border-slate-300">
            <th className="text-left px-4 py-3 text-slate-600 font-semibold text-[11px]">
              PRODUCT
            </th>

            <th className="text-left px-4 py-3 text-slate-600 font-semibold text-[11px]">
              SKU
            </th>

            <th className="text-left px-4 py-3 text-slate-600 font-semibold text-[11px]">
              CATEGORY
            </th>

            <th className="text-left px-4 py-3 text-slate-600 font-semibold text-[11px]">
              PRICE
            </th>

            <th className="text-left px-4 py-3 text-slate-600 font-semibold text-[11px]">
              STOCK
            </th>

            <th className="text-left px-4 py-3 text-slate-600 font-semibold text-[11px]">
              STATUS
            </th>

            <th className="text-center px-4 py-3 text-slate-600 font-semibold text-[11px]">
              ACTIONS
            </th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              onClick={() =>
                router.push(`/products/${product.id}`)
              }
              className="border border-slate-300 hover:bg-gray-50 h-[72px] cursor-pointer"
            >
              <td className="px-4 py-2">
                <div className="flex items-center gap-3">
                  <img
                    src={
                      product.thumbnail_url ||
                      "/images/no-image.png"
                    }
                    alt={product.name}
                    className="w-10 h-10 rounded-lg object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-[12px]">
                      {product.name}
                    </h3>

                    <p className="text-slate-500 text-[11px]">
                      {product.brand}
                    </p>
                  </div>
                </div>
              </td>

              <td className="px-4 py-2 text-[12px]">
                {product.sku}
              </td>

              <td className="px-4 py-2 text-[12px]">
                {product.category_name}
              </td>

              <td className="px-4 py-2 text-[12px] font-semibold">
                ₹{product.sale_price}
              </td>

              <td className="px-4 py-2 text-[12px]">
                {product.stock_qty}
              </td>

              <td className="px-4 py-2">
                {product.stock_qty > 0 ? (
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-600 text-[10px]">
                    In Stock
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-100 text-red-500 text-[10px]">
                    Out Of Stock
                  </span>
                )}
              </td>

              <td className="px-4 py-2">
                <div className="flex justify-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(
                        `/products/${product.id}`
                      );
                    }}
                  >
                    <Eye size={15} />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onEditProduct(product);
                    }}
                  >
                    <Pencil size={15} />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteProduct(product);
                    }}
                    className="text-red-500"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}