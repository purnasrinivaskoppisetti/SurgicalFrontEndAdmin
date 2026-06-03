import axiosInstance from "@/lib/axios";
import { API_ROUTES } from "@/constants/apiRoutes";

export const getCategories = async () => {
  const response = await axiosInstance.get(
    API_ROUTES.CATEGORIES.LIST
  );

  return response.data;
};

export const deleteCategory = async (categoryId) => {
  const response = await axiosInstance.delete(
    API_ROUTES.CATEGORIES.DELETE(categoryId)
  );

  return response.data;
};

export const getCategoryMaster = async () => {
  const response = await axiosInstance.get(
    API_ROUTES.CATEGORIES.MASTER
  );

  return response.data;
};

export const createCategory = async (payload) => {
  const response = await axiosInstance.post(
    API_ROUTES.CATEGORIES.LIST,
    payload
  );

  return response.data;
};