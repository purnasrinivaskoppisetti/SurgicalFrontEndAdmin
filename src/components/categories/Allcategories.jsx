"use client";

import { useState } from "react";

import {
    Plus,
    Pencil,
    Trash2,
    Eye,
    Star,
} from "lucide-react";

import EditCategoryModal from "./CategoriesEdit";
import AddCategoreModal from "./AddCategories";
import DeleteCategoryModal from "./CategoriesDelete";

export default function Categories({
    categoriesData = [],
    loading,
}) {
    const [openModal, setOpenModal] = useState(false);
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#f5f7fb] p-5">
                <div className="flex items-center justify-center h-[70vh]">
                    <p className="text-gray-500">Loading Categories...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f5f7fb] p-5">

            {/* MODAL */}
            {openModal && (
                <EditCategoryModal closeModal={() => setOpenModal(false)} />
            )}

            {openAddModal && (
                <AddCategoreModal
                    closeModal={() => setOpenAddModal(false)}
                />
            )}

            {openDeleteModal && (
                <DeleteCategoryModal
                    categoryId={selectedCategoryId}
                    closeModal={() => setOpenDeleteModal(false)}
                />
            )}

            {/* Header */}
            <div className="flex items-start justify-between mb-6">

                <div>
                    <h1 className="text-2xl font-bold text-[#0f172a]">
                        Categories
                    </h1>

                    <p className="text-gray-500 mt-1 text-sm">
                        {categoriesData.length} categories ·{" "}
                        {categoriesData.filter((item) => item.featured).length} active
                    </p>
                </div>

                <button
                    onClick={() => setOpenAddModal(true)}
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl font-medium shadow transition"
                >
                    <Plus size={18} />
                    Add category
                </button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

                {categoriesData.map((item, index) => (

                    <div
                        key={item.id || index}
                        className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"
                    >

                        {/* Top */}
                        <div className="flex items-start justify-between">

                            <div className="flex gap-3">

                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-2xl">
                                    {item.icon}
                                </div>

                                <div>

                                    <div className="flex items-center gap-2">

                                        <h2 className="text-xl font-bold text-gray-800">
                                            {item.name}
                                        </h2>

                                        {item.featured && (
                                            <Star
                                                size={16}
                                                className="fill-yellow-400 text-yellow-400"
                                            />
                                        )}

                                    </div>

                                    <p className="text-gray-500 text-sm mt-1">
                                        {item.products} products
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Description */}
                        <p className="text-gray-500 mt-5 text-sm leading-6">
                            {item.desc}
                        </p>

                        {/* Progress */}
                        <div className="w-full h-2 bg-gray-100 rounded-full mt-5 overflow-hidden">

                            <div
                                className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                                style={{ width: item.progress }}
                            ></div>

                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between mt-5">

                            <div className="flex items-center gap-2 text-gray-500 text-sm">

                                <Eye size={16} />

                                <span>
                                    {item.featured
                                        ? "Featured"
                                        : "Visible"}
                                </span>

                            </div>

                            <div className="flex items-center gap-4">

                                {/* EDIT BUTTON */}
                                <button
                                    onClick={() => setOpenModal(true)}
                                    className="text-gray-800 hover:scale-110 transition"
                                >
                                    <Pencil size={18} />
                                </button>

                                {/* DELETE BUTTON */}
                                <button
                                    onClick={() => {
                                        setSelectedCategoryId(item.id);
                                        setOpenDeleteModal(true);
                                    }}
                                    className="text-red-500 hover:scale-110 transition"
                                >
                                    <Trash2 size={18} />
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

            {/* Floating Button */}
            <button
                onClick={() => setOpenAddModal(true)}
                className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl hover:scale-105 transition"
            >
                <Plus size={26} />
            </button>

        </div>
    );
}