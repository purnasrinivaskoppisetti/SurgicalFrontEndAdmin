"use client";

import { X } from "lucide-react";

export default function EditProductModal({
    categories = [],
    openEditModal,
    setOpenEditModal,
    formData,
    saving,
    handleChange,
    handleImageFileChange,
    addImageField,
    removeImageField,
    toggleSwitch,
    handleSubmit,
}) {

    console.log("Edit formData:", formData);
    if (!openEditModal) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-start justify-center p-6">
            <div className="relative w-full max-w-xl bg-white rounded-2xl max-h-[82vh] overflow-y-auto mt-14 p-8">
                <button
                    onClick={() => setOpenEditModal(false)}
                    className="absolute top-6 right-6 text-gray-500 hover:text-black"
                >
                    <X size={15} />
                </button>

                <h2 className="text-xl font-bold text-[#0f172a] mb-3">
                    Edit product
                </h2>

                <div className="grid grid-cols-2 gap-3">
                    <div className="col-span-2">
                        <label className="text-sm font-semibold text-[#0f172a]">
                            Product name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name || ""}
                            onChange={handleChange}
                            placeholder="Enter Product Name"
                            className="w-full mt-2 h-12 border border-gray-300 rounded-xl px-4 text-sm outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="text-sm font-semibold text-[#0f172a]">
                            Description
                        </label>

                        <textarea
                            rows={2}
                            name="description"
                            value={formData.description || ""}
                            onChange={handleChange}
                            placeholder="Product information"
                            className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none resize-none"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-[#0f172a]">
                            Category
                        </label>

                        <select
                            name="category_id"
                            value={formData.category_id || ""}
                            onChange={handleChange}
                            className="w-full mt-2 h-9 border border-gray-300 rounded-xl px-4 text-sm outline-none"
                        >
                            <option value="">
                                Select Category
                            </option>

                            {categories.map((category) => (
                                <option
                                    key={category.id}
                                    value={category.id}
                                >
                                    {category.icon
                                        ? `${category.icon} ${category.name}`
                                        : category.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-[#0f172a]">
                            Brand
                        </label>

                        <input
                            type="text"
                            name="brand"
                            value={formData.brand || ""}
                            onChange={handleChange}
                            placeholder="Enter brand name"
                            className="w-full mt-2 h-9 border border-gray-300 rounded-xl px-4 text-sm outline-none"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-[#0f172a]">
                            MRP
                        </label>

                        <input
                            type="text"
                            name="mrp"
                            value={formData.mrp || ""}
                            onChange={handleChange}
                            className="w-full mt-2 h-9 border border-gray-300 rounded-xl px-4 text-sm outline-none"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-[#0f172a]">
                            Sale price
                        </label>

                        <input
                            type="text"
                            name="salePrice"
                            value={formData.salePrice || ""}
                            onChange={handleChange}
                            className="w-full mt-2 h-9 border border-gray-300 rounded-xl px-4 text-sm outline-none"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-[#0f172a]">
                            Stock
                        </label>

                        <input
                            type="text"
                            name="stock"
                            value={formData.stock || ""}
                            onChange={handleChange}
                            className="w-full mt-2 h-9 border border-gray-300 rounded-xl px-4 text-sm outline-none"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-[#0f172a]">
                            SKU
                        </label>

                        <input
                            type="text"
                            name="sku"
                            value={formData.sku || ""}
                            readOnly
                            className="w-full mt-2 h-9 border border-gray-300 rounded-xl px-4 text-sm bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-[#0f172a]">
                            Manufacturer
                        </label>

                        <input
                            type="text"
                            name="manufacturer"
                            value={formData.manufacturer || ""}
                            readOnly
                            className="w-full mt-2 h-9 border border-gray-300 rounded-xl px-4 text-sm bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-[#0f172a]">
                            HSN Code
                        </label>

                        <input
                            type="text"
                            name="hsn_code"
                            value={formData.hsn_code || ""}
                            readOnly
                            className="w-full mt-2 h-9 border border-gray-300 rounded-xl px-4 text-sm bg-gray-100 cursor-not-allowed"
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="text-sm font-semibold text-[#0f172a]">
                            Product Images
                        </label>

                        <div className="mt-2 space-y-2">
                            {formData.images?.map(
                                (image, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2"
                                    >
                                        <div className="flex-1 rounded-md px-2 py-2 border border-gray-200 bg-gray-100">
                                            <div className="flex items-center gap-3">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) =>
                                                        handleImageFileChange(
                                                            index,
                                                            e
                                                        )
                                                    }
                                                    className="text-sm file:border file:border-gray-300 file:rounded file:px-2 file:py-1 file:bg-white file:cursor-pointer"
                                                />

                                                <img
                                                    src={image.image_url}
                                                    alt="Product"
                                                    className="w-12 h-12 object-cover rounded border"
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeImageField(
                                                    index
                                                )
                                            }
                                            className="w-10 h-6 border border-gray-400 rounded-md"
                                        >
                                            -
                                        </button>
                                    </div>
                                )
                            )}

                            <button
                                type="button"
                                onClick={addImageField}
                                className="px-2 py-2 border border-gray-400 rounded-md text-[11px] font-semibold hover:bg-gray-50"
                            >
                                Add File
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-8">
                    {[
                        ["bestseller", "Bestseller"],
                        ["featured", "Featured"],
                        ["newArrival", "New arrival"],
                    ].map(([key, label]) => (
                        <div
                            key={key}
                            className="flex items-center gap-1 bg-[#f8fafc] px-2 py-2 rounded-xl"
                        >
                            <span className="text-xs text-[#0f172a]">
                                {label}
                            </span>

                            <button
                                type="button"
                                onClick={() => toggleSwitch(key)}
                                className={`w-10 h-5 rounded-full relative transition-all ${formData[key]
                                    ? "bg-blue-500"
                                    : "bg-gray-300"
                                    }`}
                            >
                                <span
                                    className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${formData[key]
                                        ? "left-5"
                                        : "left-0.5"
                                        }`}
                                />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="flex justify-end gap-3 mt-8">
                    <button
                        onClick={() => setOpenEditModal(false)}
                        className="px-3 h-8 border border-gray-100 rounded-lg text-xs font-medium shadow-sm hover:bg-emerald-500 hover:text-white transition"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSubmit}
                        disabled={saving}
                        className="px-5 h-8 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-xs font-medium shadow-sm transition disabled:opacity-50"
                    >
                        {saving
                            ? "Updating..."
                            : "Save Changes"}
                    </button>
                </div>
            </div>
        </div>
    );
}
