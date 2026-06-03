"use client";

import {
  Search,
  Upload,
  Download,
  Plus,
  Eye,
  Pencil,
  Copy,
  Trash2,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Omron HEM-7120 BP Monitor",
    brand: "Omron",
    sku: "SW-OMR-100",
    category: "Diagnostics",
    price: "₹1899",
    stock: 20,
    status: "active",
  },
  {
    id: 2,
    name: "Accu-Chek Active Glucometer",
    brand: "Accu-Chek",
    sku: "SW-ACC-101",
    category: "Diabetes Care",
    price: "₹999",
    stock: 22,
    status: "active",
  },
  {
    id: 3,
    name: "Dr Trust Pulse Oximeter",
    brand: "Dr Trust",
    sku: "SW-DR-102",
    category: "Diagnostics",
    price: "₹1199",
    stock: 24,
    status: "active",
  },
  {
    id: 4,
    name: "Nebulizer Compressor NE-C28",
    brand: "Omron",
    sku: "SW-OMR-103",
    category: "Respiratory",
    price: "₹2299",
    stock: 0,
    status: "out_of_stock",
  },
];

export default function ProductsPage() {
  return (
    <div className="p-6 bg-[#f8fafc] min-h-screen">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Products</h1>
          <p className="text-slate-500 text-xl mt-2">
            12 products in catalog
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-3 px-6 py-3 bg-white border rounded-2xl shadow-sm hover:bg-gray-50">
            <Upload size={20} />
            <span className="font-medium">Import CSV</span>
          </button>

          <button className="flex items-center gap-3 px-6 py-3 bg-white border rounded-2xl shadow-sm hover:bg-gray-50">
            <Download size={20} />
            <span className="font-medium">Export</span>
          </button>

          <button className="flex items-center gap-3 px-7 py-3 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-200 hover:bg-emerald-600">
            <Plus size={20} />
            <span className="font-semibold">Add Product</span>
          </button>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white border rounded-[28px] p-6 mb-8">
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-3 flex-1 border rounded-2xl px-5 py-4 shadow-sm">
            <Search className="text-slate-400" size={24} />
            <input
              type="text"
              placeholder="Search by name, brand, SKU"
              className="w-full outline-none text-lg"
            />
          </div>

          <div className="bg-slate-100 p-1 rounded-2xl flex">
            <button className="px-6 py-3 text-slate-500 font-medium">
              Grid
            </button>
            <button className="px-6 py-3 bg-white rounded-2xl border-2 border-black font-medium">
              Table
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border rounded-[28px] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-[#f8fafc] border-b">
              <th className="text-left px-6 py-5 text-slate-600 font-semibold">
                PRODUCT
              </th>
              <th className="text-left px-6 py-5 text-slate-600 font-semibold">
                SKU
              </th>
              <th className="text-left px-6 py-5 text-slate-600 font-semibold">
                CATEGORY
              </th>
              <th className="text-left px-6 py-5 text-slate-600 font-semibold">
                PRICE
              </th>
              <th className="text-left px-6 py-5 text-slate-600 font-semibold">
                STOCK
              </th>
              <th className="text-left px-6 py-5 text-slate-600 font-semibold">
                STATUS
              </th>
              <th className="text-center px-6 py-5 text-slate-600 font-semibold">
                ACTIONS
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b last:border-b-0 hover:bg-gray-50"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://placehold.co/60x60"
                      alt="product"
                      className="w-14 h-14 rounded-xl object-cover"
                    />

                    <div>
                      <h3 className="font-semibold text-[18px] text-slate-900">
                        {product.name}
                      </h3>

                      <p className="text-slate-500 text-lg">
                        {product.brand}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5 text-[18px]">{product.sku}</td>

                <td className="px-6 py-5 text-[18px] text-slate-600">
                  {product.category}
                </td>

                <td className="px-6 py-5 text-[18px] font-semibold">
                  {product.price}
                </td>

                <td className="px-6 py-5 text-[18px]">{product.stock}</td>

                <td className="px-6 py-5">
                  {product.status === "active" ? (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-600">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                      active
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-500">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                      out_of_stock
                    </span>
                  )}
                </td>

                <td className="px-6 py-5">
                  <div className="flex items-center justify-center gap-5">
                    <button>
                      <Eye size={22} />
                    </button>

                    <button>
                      <Pencil size={22} />
                    </button>

                    <button>
                      <Copy size={22} />
                    </button>

                    <button className="text-red-500">
                      <Trash2 size={22} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}