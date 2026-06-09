"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import {
  updateCategory,
} from "@/services/category.service";

export default function EditCategoryModal({
  closeModal,
  category,
  fetchCategories,
}) {
  const [name, setName] = useState("");
  const [description, setDescription] =
    useState("");
  const [featured, setFeatured] =
    useState(false);
  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    if (category) {
      setName(category.name || "");
      setDescription(category.desc || "");
      setFeatured(
        category.featured || false
      );
    }
  }, [category]);

  const handleSave = async () => {
    try {
      setLoading(true);

      const payload = {
        name,
        description,
        is_active: featured,
        parent_id: null,
      };

      const response =
        await updateCategory(
          category.id,
          payload
        );

      if (response?.success) {
        await fetchCategories();
        closeModal();
      }
    } catch (error) {
      console.log(
        "Update Category Error:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-[450px] max-h-[90vh] overflow-y-auto rounded-[28px] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.25)] p-8 animate-in fade-in zoom-in-95 duration-200">

        <button
          onClick={closeModal}
          className="absolute top-7 right-7 text-gray-500 hover:text-black transition z-10"
        >
          <X
            size={20}
            strokeWidth={2.2}
          />
        </button>

        <h2 className="text-[19px] font-bold text-[#111827] mb-2">
          Edit category
        </h2>

        <div className="gap-7 mt-4">
          <label className="block text-[14px] font-semibold text-[#111827] mb-2">
            Category name
          </label>

          <input
            type="text"
            value={name}
            readOnly
            className="h-[44px] w-full rounded-[16px] border border-[#e5e7eb] bg-[#f9fafb] px-5 text-[16px] text-[#111827] outline-none shadow-sm cursor-not-allowed"
          />
        </div>

        <div className="gap-3 mt-4">
          <label className="block text-[14px] font-semibold text-[#111827] mb-2">
            Description
          </label>

          <textarea
            rows={4}
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            className="w-full rounded-[18px] border border-[#e5e7eb] bg-[#f9fafb] px-5 py-4 text-[12px] text-[#111827] resize-none outline-none shadow-sm focus:border-[#2563eb]"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="flex items-center justify-between rounded-[18px] bg-[#f8fafc] px-2 py-3">

            <span className="text-[13px] text-[#111827] font-medium">
              Active
            </span>

            <button
              type="button"
              onClick={() =>
                setFeatured(
                  !featured
                )
              }
              className={`w-[45px] h-[25px] rounded-full flex items-center px-1 shadow-inner transition-all ${
                featured
                  ? "bg-[#2563eb]"
                  : "bg-gray-300"
              }`}
            >
              <div
                className={`w-[22px] h-[22px] rounded-full bg-white shadow-sm transition-all ${
                  featured
                    ? "ml-auto"
                    : ""
                }`}
              />
            </button>

          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">

          <button
            onClick={closeModal}
            className="h-[40px] px-4 rounded-[10px] border border-[#e5e7eb] bg-white text-[12px] font-semibold text-[#111827] shadow-sm hover:bg-gray-50 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            disabled={loading}
            className="h-[40px] px-4 rounded-[10px] bg-[#22c55e] hover:bg-[#16a34a] text-[12px] font-semibold text-white shadow-lg shadow-green-200 transition-all disabled:opacity-50"
          >
            {loading
              ? "Saving..."
              : "Save category"}
          </button>

        </div>

      </div>
    </div>
  );
}