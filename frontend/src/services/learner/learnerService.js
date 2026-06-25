import { API_ENDPOINTS } from '../../constants/apiEndpoints.js';
import { apiClient } from '../api/apiClient.js';

export const learnerService = {
  getProfile: () => apiClient.get(`${API_ENDPOINTS.LEARNERS}/profile`),
  updateProfile: (payload) => apiClient.put(`${API_ENDPOINTS.LEARNERS}/profile`, payload),
  getProgress: () => apiClient.get(`${API_ENDPOINTS.LEARNERS}/progress`),
};
