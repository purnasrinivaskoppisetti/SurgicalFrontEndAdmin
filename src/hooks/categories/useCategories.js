"use client";

import { useEffect, useState } from "react";
import { getCategories } from "@/services/category.service";

export default function useCategories() {
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      setLoading(true);

      const response = await getCategories();

      if (response?.success) {
        const formattedData = response.data.map((item) => ({
          id: item.id,
          name: item.name,
          products: 0,
          desc: item.description,
          icon: item.icon || "🏥",
          progress: "50%",
          featured: item.is_active,
        }));

        setCategoriesData(formattedData);
      }
    } catch (error) {
      console.log("Categories Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categoriesData,
    loading,
    fetchCategories,
  };
}