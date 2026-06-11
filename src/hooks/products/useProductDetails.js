"use client";

import { useEffect, useState } from "react";

import { getProductById } from "@/services/product.service";

export default function useProductDetails(
    productId
) {
    const [product, setProduct] =
        useState(null);

    const [loading, setLoading] =
        useState(false);

    const fetchProduct = async () => {
        if (!productId) return;

        try {
            setLoading(true);

            const response =
                await getProductById(
                    productId
                );

            setProduct(
                response?.data || null
            );
        } catch (error) {
            console.error(
                "Fetch Product Details Error:",
                error
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, [productId]);

    return {
        product,
        loading,
        fetchProduct,
    };
}