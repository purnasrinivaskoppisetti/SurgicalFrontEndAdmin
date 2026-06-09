"use client";

import Categories from "@/components/categories/Allcategories";
import useCategories from "@/hooks/categories/useCategories";

export default function CategoriesPage() {
  const {
    categoriesData,
    loading,
    fetchCategories,
  } = useCategories();

  return (
    <Categories
      categoriesData={categoriesData}
      loading={loading}
      fetchCategories={fetchCategories}
    />
  );
}