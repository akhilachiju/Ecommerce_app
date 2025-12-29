import apiClient from '../../services/apiClient';

export const productService = {
  getAllProducts: async () => {
    return await apiClient.get('/products');
  },
  
  getProductById: async (id) => {
    return await apiClient.get(`/products/${id}`);
  },
  
  searchProducts: async (query) => {
    return await apiClient.get(`/products/search?q=${query}`);
  },
  
  getProductsByCategory: async (category) => {
    return await apiClient.get(`/products/category/${category}`);
  }
};

export default productService;
