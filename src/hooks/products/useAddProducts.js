"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const initialState = {
    category_id: "",

    name: "",
    description: "",
    short_description: "",
    brand: "",

    mrp: "",
    sale_price: "",
    stock_qty: "",

    sku: "",
    manufacturer: "",
    hsn_code: "",

    images: [null],

    is_featured: false,
    is_bestseller: false,
    is_new_arrival: false,
};

const ALLOWED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];

const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB

export default function useAddProduct({
    categories = [],
    handleCreateProduct,
}) {
    const [loading, setLoading] =
        useState(false);

    const [formData, setFormData] =
        useState(initialState);

    useEffect(() => {
        if (
            categories.length > 0 &&
            !formData.category_id
        ) {
            setFormData((prev) => ({
                ...prev,
                category_id:
                    categories[0].id,
            }));
        }
    }, [categories]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (
        index,
        e
    ) => {
        const file =
            e.target.files?.[0] || null;

        if (!file) return;

        // File type validation
        if (
            !ALLOWED_IMAGE_TYPES.includes(
                file.type
            )
        ) {
            toast.error(
                "Only JPG, JPEG, PNG and WEBP images are allowed."
            );

            e.target.value = "";
            return;
        }

        // File size validation
        if (file.size > MAX_FILE_SIZE) {
            toast.error(
                "Image size must not exceed 3MB."
            );

            e.target.value = "";
            return;
        }

        setFormData((prev) => {
            const images = [
                ...prev.images,
            ];

            images[index] = file;

            return {
                ...prev,
                images,
            };
        });
    };

    const addImageField = () => {
        setFormData((prev) => ({
            ...prev,
            images: [
                ...prev.images,
                null,
            ],
        }));
    };

    const removeImageField = (
        index
    ) => {
        setFormData((prev) => ({
            ...prev,
            images: prev.images.filter(
                (_, i) => i !== index
            ),
        }));
    };

    const toggleSwitch = (field) => {
        setFormData((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    const resetForm = () => {
        setFormData({
            ...initialState,
            category_id:
                categories?.[0]?.id || "",
            images: [null],
        });
    };

    const handleSubmit = async () => {
        try {
            if (!formData.category_id) {
                toast.error(
                    "Please select category"
                );
                return false;
            }

            setLoading(true);

            const response =
                await handleCreateProduct({
                    category_id:
                        formData.category_id,

                    name: formData.name,

                    description:
                        formData.description,

                    short_description:
                        formData.short_description,

                    brand: formData.brand,

                    mrp: Number(
                        formData.mrp
                    ),

                    sale_price: Number(
                        formData.sale_price
                    ),

                    stock_qty: Number(
                        formData.stock_qty
                    ),

                    sku: formData.sku,

                    manufacturer:
                        formData.manufacturer,

                    hsn_code:
                        formData.hsn_code,

                    is_featured:
                        formData.is_featured,

                    is_bestseller:
                        formData.is_bestseller,

                    is_new_arrival:
                        formData.is_new_arrival,

                    images:
                        formData.images.filter(
                            Boolean
                        ),
                });

            resetForm();

            toast.success(
                response?.message ||
                "Product created successfully"
            );

            return true;
        } catch (error) {
            console.error(error);

            toast.error(
                error?.message ||
                "Failed to create product"
            );

            return false;
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        formData,
        setFormData,

        handleChange,
        handleFileChange,

        addImageField,
        removeImageField,

        toggleSwitch,

        handleSubmit,

        resetForm,
    };
}