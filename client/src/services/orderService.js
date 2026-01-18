import apiClient from '../../services/apiClient';

export const orderService = {
  createOrder: async (orderData) => {
    return await apiClient.post('/orders', orderData);
  },
  
  getOrderById: async (id) => {
    return await apiClient.get(`/orders/${id}`);
  },
  
  getUserOrders: async (userId) => {
    return await apiClient.get(`/orders/user/${userId}`);
  },
  
  updateOrderStatus: async (id, status) => {
    return await apiClient.put(`/orders/${id}/status`, { status });
  }
};

export default orderService;
