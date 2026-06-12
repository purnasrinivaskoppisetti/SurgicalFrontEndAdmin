"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useEditProduct({
    selectedProduct,
    handleUpdateProduct,
    onSuccess,
}) {
    const [saving, setSaving] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        short_description: "",
        category_id: "",
        brand: "",
        mrp: "",
        salePrice: "",
        stock: "",
        sku: "",

        manufacturer: "",
        hsn_code: "",

        images: [""],
        imageFiles: [],

        bestseller: false,
        featured: false,
        newArrival: false,
    });

    useEffect(() => {
        if (!selectedProduct) return;

        setFormData({
            name: selectedProduct.name ?? "",

            description:
                selectedProduct.description ?? "",

            short_description:
                selectedProduct.short_description ?? "",

            category_id:
                selectedProduct.category_id ?? "",

            brand:
                selectedProduct.brand ?? "",

            mrp: String(
                selectedProduct.mrp ?? ""
            ),

            salePrice: String(
                selectedProduct.sale_price ?? ""
            ),

            stock: String(
                selectedProduct.stock_qty ?? ""
            ),

            sku:
                selectedProduct.sku ?? "",

            manufacturer:
                selectedProduct.manufacturer ?? "",

            hsn_code:
                selectedProduct.hsn_code ?? "",

            images:
                selectedProduct.images || [],

            imageFiles: [],

            bestseller:
                selectedProduct.is_bestseller ?? false,

            featured:
                selectedProduct.is_featured ?? false,

            newArrival:
                selectedProduct.is_new_arrival ?? false,
        });
    }, [selectedProduct]);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]:
                e.target.value,
        }));
    };

    const handleImageFileChange = (
        index,
        e
    ) => {
        const file =
            e.target.files?.[0];

        if (!file) return;

        setFormData((prev) => {
            const imageFiles = [
                ...prev.imageFiles,
            ];

            imageFiles[index] = file;

            return {
                ...prev,
                imageFiles,
            };
        });
    };

    const addImageField = () => {
        setFormData((prev) => ({
            ...prev,
            images: [
                ...prev.images,
                "",
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

            imageFiles:
                prev.imageFiles.filter(
                    (_, i) => i !== index
                ),
        }));
    };

    const toggleSwitch = (field) => {
        setFormData((prev) => ({
            ...prev,
            [field]:
                !prev[field],
        }));
    };

    const handleSubmit = async () => {
        try {
            setSaving(true);

            const response =
                await handleUpdateProduct(
                    selectedProduct.id,
                    {
                        category_id:
                            formData.category_id,

                        name: formData.name,

                        sku: formData.sku,

                        brand: formData.brand,

                        description:
                            formData.description,

                        short_description:
                            formData.short_description,

                        mrp: formData.mrp,

                        sale_price:
                            formData.salePrice,

                        stock_qty:
                            formData.stock,

                        manufacturer:
                            formData.manufacturer,

                        hsn_code:
                            formData.hsn_code,

                        is_featured:
                            formData.featured,

                        is_bestseller:
                            formData.bestseller,

                        is_new_arrival:
                            formData.newArrival,

                        images:
                            formData.imageFiles.filter(
                                Boolean
                            ),
                    }
                );

            toast.success(
                response?.message ||
                "Product updated successfully"
            );

            onSuccess?.();

            return true;
        } catch (error) {
            console.error(error);

            toast.error(
                error?.message ||
                error?.detail ||
                "Failed to update product"
            );

            return false;
        } finally {
            setSaving(false);
        }
    };

    return {
        formData,
        saving,
        handleChange,
        handleImageFileChange,
        addImageField,
        removeImageField,
        toggleSwitch,
        handleSubmit,
    };
}