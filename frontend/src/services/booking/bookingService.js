import { API_ENDPOINTS } from '../../constants/apiEndpoints.js';
import { apiClient } from '../api/apiClient.js';

export const bookingService = {
  create: (payload) => apiClient.post(API_ENDPOINTS.BOOKINGS, payload),
  list: () => apiClient.get(API_ENDPOINTS.BOOKINGS),
  cancel: (id) => apiClient.patch(`${API_ENDPOINTS.BOOKINGS}/${id}/cancel`),
};
