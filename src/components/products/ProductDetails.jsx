"use client";
 
import { useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
 
export default function ProductDetails({
    product,
    onBack,
}) {
    const router = useRouter();
 
    const images =
        product?.images?.length > 0
            ? product.images
                .sort(
                    (a, b) =>
                        a.sort_order -
                        b.sort_order
                )
                .map(
                    (image) =>
                        image.image_url
                )
            : product?.thumbnail_url
                ? [product.thumbnail_url]
                : ["/images/no-image.png"];
 
    const [currentImage, setCurrentImage] =
        useState(0);
 
    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Product not found
            </div>
        );
    }
 
    return (
        <div className="min-h-screen bg-[#f8fafc] p-6">
            <button
                onClick={() => {
                    if (onBack) {
                        onBack();
                    } else {
                        router.back();
                    }
                }}
                className="mb-5 w-[30px] h-[30px] rounded-full border-[2px] border-[#3A3A3A] flex items-center justify-center hover:bg-gray-50 transition"
            >
                 <ChevronLeft size={15} />
            </button>
 
            <div className="max-w-7xl mx-auto">
 
                {/* IMAGE GALLERY */}
                <div className="bg-white rounded-[24px] border border-gray-200 p-4 shadow-sm">
 
                    <div className="relative">
 
                        {images.length > 4 && (
                            <button
                                onClick={() =>
                                    document
                                        .getElementById(
                                            "product-images"
                                        )
                                        ?.scrollBy({
                                            left: -1000,
                                            behavior: "smooth",
                                        })
                                }
                                className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border shadow-md flex items-center justify-center"
                            >
                                <ChevronLeft size={20} />
                            </button>
                        )}
 
                        <div
                            id="product-images"
                            className="flex gap-4 overflow-x-auto px-14 scroll-smooth"
                        >
                            {images.map(
                                (img, index) => (
                                    <div
                                        key={index}
                                        onClick={() =>
                                            setCurrentImage(
                                                index
                                            )
                                        }
                                        className={`flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden border-2 transition-all ${currentImage ===
                                            index
                                            ? "border-blue-500"
                                            : "border-gray-200"
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            alt={
                                                product.name
                                            }
                                            className="w-[240px] h-[240px] object-cover"
                                        />
                                    </div>
                                )
                            )}
                        </div>
 
                        {images.length > 4 && (
                            <button
                                onClick={() =>
                                    document
                                        .getElementById(
                                            "product-images"
                                        )
                                        ?.scrollBy({
                                            left: 1000,
                                            behavior: "smooth",
                                        })
                                }
                                className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border shadow-md flex items-center justify-center"
                            >
                                <ChevronRight size={20} />
                            </button>
                        )}
 
                    </div>
 
                </div>
 
                {/* PRODUCT DETAILS */}
                <div className="bg-white rounded-[24px] border border-gray-200 p-6 shadow-sm mt-5">
 
                    <h1 className="text-[22px] font-bold text-[#0f172a]">
                        {product.name}
                    </h1>
 
                    <p className="text-gray-500 mt-2">
                        {product.brand}
                    </p>
 
                    <div className="flex items-center gap-3 mt-5">
 
                        <span className="text-[20px] font-bold text-green-600">
                            ₹{product.sale_price}
                        </span>
 
                        <span className="text-[16px] text-gray-400 line-through">
                            ₹{product.mrp}
                        </span>
 
                    </div>
 
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
 
                        <div className="bg-[#f8fafc] rounded-xl p-3">
                            <p className="text-[11px] text-gray-500">
                                Category
                            </p>
                            <p className="text-[13px] font-semibold mt-1">
                                {product.category_name}
                            </p>
                        </div>
 
                        <div className="bg-[#f8fafc] rounded-xl p-3">
                            <p className="text-[11px] text-gray-500">
                                Brand
                            </p>
                            <p className="text-[13px] font-semibold mt-1">
                                {product.brand}
                            </p>
                        </div>
 
                        <div className="bg-[#f8fafc] rounded-xl p-3">
                            <p className="text-[11px] text-gray-500">
                                SKU
                            </p>
                            <p className="text-[13px] font-semibold mt-1">
                                {product.sku}
                            </p>
                        </div>
 
                        <div className="bg-[#f8fafc] rounded-xl p-3">
                            <p className="text-[11px] text-gray-500">
                                Stock
                            </p>
                            <p className="text-[13px] font-semibold mt-1">
                                {product.stock_qty}
                            </p>
                        </div>
 
                        <div className="bg-[#f8fafc] rounded-xl p-3">
                            <p className="text-[11px] text-gray-500">
                                Discount
                            </p>
                            <p className="text-[13px] font-semibold mt-1">
                                {product.discount_percentage}%
                            </p>
                        </div>
 
                        <div className="bg-[#f8fafc] rounded-xl p-3">
                            <p className="text-[11px] text-gray-500">
                                Status
                            </p>
                            <p className="text-[13px] font-semibold mt-1 text-green-600">
                                {product.stock_status}
                            </p>
                        </div>
 
                        <div className="bg-[#f8fafc] rounded-xl p-3">
                            <p className="text-[11px] text-gray-500">
                                Rating
                            </p>
                            <p className="text-[13px] font-semibold mt-1">
                                ⭐ {product.rating}
                            </p>
                        </div>
 
                        <div className="bg-[#f8fafc] rounded-xl p-3">
                            <p className="text-[11px] text-gray-500">
                                Reviews
                            </p>
                            <p className="text-[13px] font-semibold mt-1">
                                {product.review_count}
                            </p>
                        </div>
 
                    </div>
 
                    <div className="mt-4 bg-[#f8fafc] rounded-xl p-3">
 
                        <p className="text-[11px] text-gray-500">
                            Created Date
                        </p>
 
                        <p className="text-[13px] font-semibold mt-1">
                            {product.created_at
                                ? new Date(
                                    product.created_at
                                ).toLocaleDateString()
                                : "-"}
                        </p>
 
                    </div>
 
                    <div className="flex gap-2 mt-5">
 
                        {product.is_featured && (
                            <span className="bg-blue-500 text-white text-[11px] px-3 py-1 rounded-full">
                                Featured
                            </span>
                        )}
 
                        {product.is_bestseller && (
                            <span className="bg-orange-500 text-white text-[11px] px-3 py-1 rounded-full">
                                Bestseller
                            </span>
                        )}
 
                        {product.is_new_arrival && (
                            <span className="bg-green-500 text-white text-[11px] px-3 py-1 rounded-full">
                                New Arrival
                            </span>
                        )}
 
                    </div>
 
                    <div className="mt-8">
 
                        <h3 className="text-small font-bold mb-1">
                            Short Description
                        </h3>
 
                        <p className="text-slate-600 leading-7 text-sm">
                            {product.short_description ||
                                "No short description available"}
                        </p>
 
                    </div>
 
                    <div className="mt-8">
 
                        <h3 className="text-small font-bold mb-1">
                            Description
                        </h3>
 
                        <p className="text-slate-600 leading-7 text-sm">
                            {product.description ||
                                "No description available"}
                        </p>
 
                    </div>
 
                </div>
 
            </div>
 
        </div>
    );
}
 