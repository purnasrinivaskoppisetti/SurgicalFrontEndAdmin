"use client";
import { useState } from "react";

import {
    Search,
    Plus,
} from "lucide-react";

import ProductGrid from "./ProductGrid";
import ProductTable from "./ProductTable";


export default function ProductsPage({
    products = [],
    categories = [],
    loading = false,

    search,
    setSearch,

    categoryId,
    setCategoryId,

    onAddProduct,
    onEditProduct,
    onDeleteProduct,
}) {
    const [view, setView] = useState("grid");

    return (
        <div className="p-4 bg-[#f8fafc] min-h-screen">
            {/* HEADER */}
            <div className="flex items-start justify-between mb-5">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">
                        Products
                    </h1>

                    <p className="text-slate-500 text-sm mt-1">
                        {products.length} products in catalog
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={onAddProduct}
                        className="flex items-center gap-1 px-4 py-2 bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-200 hover:bg-emerald-600"
                    >
                        <Plus size={15} />
                        <span className="font-semibold text-xs">
                            Add Product
                        </span>
                    </button>
                </div>
            </div>

            {/* SEARCH + FILTER + TOGGLE */}
            <div className="bg-white border border-slate-300 rounded-2xl p-2 mb-5 shadow-sm">
                <div className="flex items-center justify-between gap-4">

                    {/* LEFT SIDE - SEARCH */}
                    <div className="flex items-center gap-2 flex-1 max-w-[500px] bg-[#f8fafc] rounded-lg px-3 py-2">
                        <Search
                            className="text-slate-400"
                            size={17}
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            placeholder="Search by name, brand, SKU"
                            className="w-full bg-transparent outline-none text-[13px] placeholder:text-slate-400"
                        />
                    </div>

                    {/* RIGHT SIDE - CATEGORY + VIEW TOGGLE */}
                    <div className="flex items-center gap-3">

                        <select
                            value={categoryId}
                            onChange={(e) =>
                                setCategoryId(e.target.value)
                            }
                            className="h-[30px] px-3 border border-slate-300 rounded-lg text-[13px] bg-white outline-none min-w-[180px]"
                        >
                            <option value="">
                                All Categories
                            </option>

                            {categories.map((category) => (
                                <option
                                    key={category.id}
                                    value={category.id}
                                >
                                    {category.name}
                                </option>
                            ))}
                        </select>

                        <div className="bg-slate-100 p-1 rounded-lg flex items-center gap-1">
                            <button
                                onClick={() => setView("grid")}
                                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${view === "grid"
                                    ? "bg-white border border-slate-300 text-black"
                                    : "text-slate-500"
                                    }`}
                            >
                                Grid
                            </button>

                            <button
                                onClick={() => setView("table")}
                                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${view === "table"
                                    ? "bg-white border border-slate-300 text-black"
                                    : "text-slate-500"
                                    }`}
                            >
                                Table
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            {/* LOADING */}
            {loading && (
                <div className="bg-white border rounded-xl p-10 text-center">
                    Loading products...
                </div>
            )}

            {!loading && view === "grid" && (
                <ProductGrid
                    products={products}
                    onEditProduct={onEditProduct}
                    onDeleteProduct={onDeleteProduct}
                />
            )}

            {!loading && view === "table" && (
                <ProductTable
                    products={products}
                    onEditProduct={onEditProduct}
                    onDeleteProduct={onDeleteProduct}
                />
            )}

        </div>
    );
}