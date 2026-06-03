"use client";
 
import { X } from "lucide-react";
 
export default function EditCategoryModal({ closeModal }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-4">
 
      {/* Modal Container */}
      <div className="relative w-full max-w-[500px] max-h-[90vh] overflow-y-auto rounded-[28px] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.25)] p-8 animate-in fade-in zoom-in-95 duration-200">
 
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-7 right-7 text-gray-500 hover:text-black transition z-10"
        >
          <X size={28} strokeWidth={2.2} />
        </button>
 
        {/* Heading */}
        <h2 className="text-[24px] font-bold text-[#111827] mb-8">
          Edit category
        </h2>
 
        {/* Top Section */}
        <div className="grid grid-cols-[120px_1fr] gap-5">
 
          {/* Icon */}
          <div>
            <label className="block text-[15px] font-semibold text-[#111827] mb-2">
              Icon
            </label>
 
            <div className="h-[54px] rounded-[16px] border-2 border-[#3b82f6] bg-[#f8fbff] flex items-center justify-center shadow-sm">
              <span className="text-[28px]">🩺</span>
            </div>
          </div>
 
          {/* Category Name */}
          <div>
            <label className="block text-[15px] font-semibold text-[#111827] mb-2">
              Category name
            </label>
 
            <select
              defaultValue="Diagnostics"
              className="w-full h-[54px] rounded-[16px] border border-[#e5e7eb] bg-[#f9fafb] px-5 text-[16px] text-[#111827] outline-none shadow-sm focus:border-[#2563eb]"
            >
              <option>Diagnostics</option>
 
              <option>Orthopedic</option>
 
              <option>Diabetes Care</option>
 
              <option>Respiratory</option>
 
              <option>PPE</option>
 
              <option>Mother & Baby</option>
 
              <option>Surgical</option>
 
            </select>
          </div>
        </div>
 
        {/* Description */}
        <div className="mt-7">
          <label className="block text-[15px] font-semibold text-[#111827] mb-2">
            Description
          </label>
 
          <textarea
            rows={4}
            defaultValue="BP monitors, oximeters, thermometers"
            className="w-full rounded-[18px] border border-[#e5e7eb] bg-[#f9fafb] px-5 py-4 text-[16px] text-[#111827] resize-none outline-none shadow-sm focus:border-[#2563eb]"
          />
        </div>
 
        {/* Image URL */}
        <div className="mt-7">
          <label className="block text-[15px] font-semibold text-[#111827] mb-2">
            Image URL
          </label>
 
          <input
            type="text"
            placeholder="https://..."
            className="w-full h-[54px] rounded-[16px] border border-[#e5e7eb] bg-[#f9fafb] px-5 text-[16px] outline-none shadow-sm focus:border-[#2563eb]"
          />
        </div>
 
        {/* Toggle Row */}
        <div className="grid grid-cols-2 gap-5 mt-7">
 
          {/* Featured */}
          <div className="flex items-center justify-between rounded-[18px] bg-[#f8fafc] px-5 py-5">
            <span className="text-[16px] text-[#111827] font-medium">
              Featured on home
            </span>
 
            <div className="w-[52px] h-[30px] rounded-full bg-[#2563eb] flex items-center px-1 shadow-inner">
              <div className="w-[22px] h-[22px] rounded-full bg-white ml-auto shadow-sm"></div>
            </div>
          </div>
 
          {/* Active */}
          <div className="flex items-center justify-between rounded-[18px] bg-[#f8fafc] px-5 py-5">
            <span className="text-[16px] text-[#111827] font-medium">
              Active
            </span>
 
            <div className="w-[52px] h-[30px] rounded-full bg-[#2563eb] flex items-center px-1 shadow-inner">
              <div className="w-[22px] h-[22px] rounded-full bg-white ml-auto shadow-sm"></div>
            </div>
          </div>
        </div>
 
        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-9">
 
          <button
            onClick={closeModal}
            className="h-[50px] px-8 rounded-[16px] border border-[#e5e7eb] bg-white text-[16px] font-semibold text-[#111827] shadow-sm hover:bg-gray-50 transition"
          >
            Cancel
          </button>
 
          <button className="h-[50px] px-8 rounded-[16px] bg-[#22c55e] hover:bg-[#16a34a] text-[16px] font-semibold text-white shadow-lg shadow-green-200 transition-all">
            Save category
          </button>
 
        </div>
      </div>
    </div>
  );
}