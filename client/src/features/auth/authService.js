import apiClient from '../../services/apiClient';

export const authService = {
  login: async (credentials) => {
    return await apiClient.post('/auth/login', credentials);
  },
  
  register: async (userData) => {
    return await apiClient.post('/auth/register', userData);
  },
  
  logout: async () => {
    return await apiClient.post('/auth/logout');
  },
  
  getCurrentUser: async () => {
    return await apiClient.get('/auth/me');
  }
};

export default authService;
