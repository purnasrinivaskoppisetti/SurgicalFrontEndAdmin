"use client";

import { useParams } from "next/navigation";

import ProductDetails from "@/components/products/ProductDetails";

import useProductDetails from "@/hooks/products/useProductDetails";

export default function Page() {
    const params = useParams();

    const {
        product,
        loading,
    } = useProductDetails(
        params?.id
    );

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading...
            </div>
        );
    }

    return (
        <ProductDetails
            product={product}
        />
    );
}