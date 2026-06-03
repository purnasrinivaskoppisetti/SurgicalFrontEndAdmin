export const API_ROUTES = {
  AUTH: {
    LOGIN: "/auth/admin/login",
  },

  CATEGORIES: {
    LIST: "/admin/categories",
    DELETE: (id) => `/admin/categories/${id}`,
    MASTER: "/admin/category-master",
  },
};