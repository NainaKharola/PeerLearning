import { API_ENDPOINTS } from '../../constants/apiEndpoints.js';
import { apiClient } from '../api/apiClient.js';

export const notificationService = {
  list: () => apiClient.get(API_ENDPOINTS.NOTIFICATIONS),
  markRead: (id) => apiClient.patch(`${API_ENDPOINTS.NOTIFICATIONS}/${id}/read`),
};
