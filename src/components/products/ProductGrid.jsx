"use client";

import { useRouter } from "next/navigation";
import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

export default function ProductGrid({
  products,
  onEditProduct,
  onDeleteProduct,
}) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 shadow-sm">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() =>
            router.push(`/products/${product.id}`)
          }
          className="group bg-white rounded-[22px] overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all cursor-pointer"
        >
          <div className="relative">
            <img
              src={
                product.thumbnail_url ||
                "/images/no-image.png"
              }
              alt={product.name}
              className="w-full h-[200px] object-cover"
            />

            <div className="absolute top-3 left-3 flex flex-col gap-1.5">
              {product.is_bestseller && (
                <span className="bg-orange-400 text-white text-[10px] font-semibold px-3 py-1.5 rounded-full">
                  Bestseller
                </span>
              )}

              {product.is_new_arrival && (
                <span className="bg-blue-500 text-white text-[10px] font-semibold px-3 py-1.5 rounded-full">
                  ✨ New
                </span>
              )}
            </div>

            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(
                    `/products/${product.id}`
                  );
                }}
                className="w-6 h-6 rounded-lg bg-white shadow-md flex items-center justify-center"
              >
                <Eye size={14} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onEditProduct(product);
                }}
                className="w-6 h-6 rounded-lg bg-white shadow-md flex items-center justify-center"
              >
                <Pencil size={14} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteProduct(product);
                }}
                className="w-6 h-6 rounded-lg bg-white shadow-md flex items-center justify-center text-red-500"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>

          <div className="p-4">
            <p className="uppercase text-gray-400 text-[9px] font-medium tracking-wide">
              {product.brand}
            </p>

            <h2 className="text-xs font-bold text-[#0f172a] mt-1 leading-snug">
              {product.name}
            </h2>

            <div className="flex items-center gap-2 mt-4">
              <span className="text-yellow-500 text-sm">
                ★
              </span>

              <span className="text-gray-500 text-[11px]">
                {product.rating} ·{" "}
                {product.review_count} reviews
              </span>
            </div>

            <div className="flex items-end justify-between mt-4">
              <div className="flex items-center gap-2">
                <span className="text-[14px] font-bold text-[#0f172a]">
                  ₹{product.sale_price}
                </span>

                <span className="text-gray-400 line-through text-xs">
                  ₹{product.mrp}
                </span>
              </div>

              <span className="text-orange-500 font-semibold text-xs">
                {product.stock_qty} in stock
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}