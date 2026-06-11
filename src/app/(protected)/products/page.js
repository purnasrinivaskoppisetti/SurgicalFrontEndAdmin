"use client";

import { useState } from "react";

import Products from "@/components/products/AllProducts";
import AddProductModal from "@/components/products/AddProducts";
import EditProductModal from "@/components/products/EditProducts";
import DeleteProductModal from "@/components/products/DeleteProducts";
import Pagination from "@/components/common/Pagination";

import useProducts from "@/hooks/products/useProducts";
import useCategories from "@/hooks/categories/useCategories";

export default function ProductsPage() {
    const {
        products,
        loading,

        search,
        setSearch,

        categoryId,
        setCategoryId,

        page,
        setPage,

        pagination,

        handleDeleteProduct,

        // Add Product
        formData,
        handleChange,
        handleFileChange,
        addImageField,
        removeImageField,
        toggleSwitch,
        handleSubmit,

        // Edit Product
        selectedProduct,
        setSelectedProduct,

        openEditModal,
        setOpenEditModal,

        handleOpenEdit,

        editFormData,
        editSaving,
        editHandleChange,
        editHandleImageFileChange,

        editAddImageField,
        editRemoveImageField,

        editToggleSwitch,
        editHandleSubmit,
    } = useProducts();

    const { categoriesData } =
        useCategories();

    const [openModal, setOpenModal] =
        useState(false);

    const [openDeleteModal, setOpenDeleteModal] =
        useState(false);

    const handleOpenAdd = () => {
        setOpenModal(true);
    };

    const handleOpenDelete = (product) => {
        setSelectedProduct(product);
        setOpenDeleteModal(true);
    };

    return (
        <>
            <Products
                products={products}
                categories={categoriesData}
                loading={loading}
                search={search}
                setSearch={setSearch}
                categoryId={categoryId}
                setCategoryId={setCategoryId}
                onAddProduct={handleOpenAdd}
                onEditProduct={handleOpenEdit}
                onDeleteProduct={handleOpenDelete}
            />

            <Pagination
                loading={loading}
                page={page}
                setPage={setPage}
                pagination={pagination}
                totalItems={products.length}
            />

            <AddProductModal
                categories={categoriesData}
                openModal={openModal}
                setOpenModal={setOpenModal}
                formData={formData}
                handleChange={handleChange}
                handleFileChange={handleFileChange}
                addImageField={addImageField}
                removeImageField={removeImageField}
                toggleSwitch={toggleSwitch}
                handleSubmit={handleSubmit}
                loading={loading}
            />

            <EditProductModal
                categories={categoriesData}
                openEditModal={openEditModal}
                setOpenEditModal={setOpenEditModal}
                formData={editFormData}
                saving={editSaving}
                handleChange={editHandleChange}
                handleImageFileChange={editHandleImageFileChange}
                addImageField={editAddImageField}
                removeImageField={editRemoveImageField}
                toggleSwitch={editToggleSwitch}
                handleSubmit={editHandleSubmit}
            />
            <DeleteProductModal
                openDeleteModal={
                    openDeleteModal
                }
                setOpenDeleteModal={
                    setOpenDeleteModal
                }
                product={selectedProduct}
                handleDeleteProduct={
                    handleDeleteProduct
                }
            />
        </>
    );
}