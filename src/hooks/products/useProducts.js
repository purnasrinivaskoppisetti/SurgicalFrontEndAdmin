"use client";

import { useEffect, useState } from "react";

import {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct,
} from "@/services/product.service";

import { getCategories } from "@/services/category.service";

import useAddProduct from "./useAddProducts";
import useEditProduct from "./useEditProducts";

export default function useProducts() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [page, setPage] = useState(1);
    const [pagination, setPagination] =
        useState({
            current_page: 1,
            page_size: 20,
            total_records: 0,
            total_pages: 1,
            has_next: false,
            has_previous: false,
        });
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [openEditModal, setOpenEditModal] = useState(false);
    const fetchProducts = async () => {
        try {
            setLoading(true);

            const response =
                await getProducts({
                    page,
                    page_size: 20,
                    search,
                    category_id:
                        categoryId,
                });

            setProducts(
                response?.data || []
            );

            setPagination(
                response?.pagination || {
                    current_page: 1,
                    page_size: 20,
                    total_records: 0,
                    total_pages: 1,
                    has_next: false,
                    has_previous: false,
                }
            );
        } catch (error) {
            console.error(
                "Fetch Products Error:",
                error
            );
        } finally {
            setLoading(false);
        }
    };

    const fetchCategories = async () => {
        try {
            const response =
                await getCategories();

            if (response?.success) {
                setCategories(
                    response?.data || []
                );
            }
        } catch (error) {
            console.error(
                "Fetch Categories Error:",
                error
            );
        }
    };

    const handleCreateProduct =
        async (payload) => {
            try {
                setLoading(true);

                const response =
                    await createProduct(
                        payload
                    );

                await fetchProducts();

                return response;
            } catch (error) {
                console.error(
                    "Create Product Error:",
                    error
                );

                throw error;
            } finally {
                setLoading(false);
            }
        };

    const handleDeleteProduct =
        async (productId) => {
            try {
                setLoading(true);

                const response =
                    await deleteProduct(
                        productId
                    );

                await fetchProducts();

                return response;
            } catch (error) {
                console.error(
                    "Delete Product Error:",
                    error
                );

                throw error;
            } finally {
                setLoading(false);
            }
        };

    const handleUpdateProduct =
        async (
            productId,
            payload
        ) => {
            try {
                setLoading(true);

                const response =
                    await updateProduct(
                        productId,
                        payload
                    );

                await fetchProducts();

                return response;
            } catch (error) {
                console.error(
                    "Update Product Error:",
                    error
                );

                throw error;
            } finally {
                setLoading(false);
            }
        };

    const addProduct =
        useAddProduct({
            categories,
            handleCreateProduct,
        });

    const editProduct = useEditProduct({
        selectedProduct,
        handleUpdateProduct,
        onSuccess: () => {
            setOpenEditModal(false);
            setSelectedProduct(null);
        },
    });
    const handleOpenEdit = async (
        product
    ) => {
        try {
            const response =
                await getProductById(
                    product.id
                );

            setSelectedProduct(
                response.data || response
            );

            setOpenEditModal(true);
        } catch (error) {
            console.error(
                "Fetch Product Details Error:",
                error
            );
        }
    };
    useEffect(() => {
        fetchProducts();
    }, [page, search, categoryId]);

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        setPage(1);
    }, [search, categoryId]);

    return {
        products,
        categories,
        loading,

        search,
        setSearch,

        categoryId,
        setCategoryId,

        page,
        setPage,

        pagination,

        fetchProducts,

        handleCreateProduct,
        handleDeleteProduct,
        handleUpdateProduct,

        selectedProduct,
        setSelectedProduct,

        openEditModal,
        setOpenEditModal,

        handleOpenEdit,

        // Add Product
        ...addProduct,

        // Edit Product
        editFormData: editProduct.formData,
        editSaving: editProduct.saving,

        editHandleChange:
            editProduct.handleChange,

        editHandleImageFileChange:
            editProduct.handleImageFileChange,

        editAddImageField:
            editProduct.addImageField,

        editRemoveImageField:
            editProduct.removeImageField,

        editToggleSwitch:
            editProduct.toggleSwitch,

        editHandleSubmit:
            editProduct.handleSubmit,
    };
}