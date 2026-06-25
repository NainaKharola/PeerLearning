import { API_ENDPOINTS } from '../../constants/apiEndpoints.js';
import { apiClient } from '../api/apiClient.js';

export const mentorService = {
  discover: (params) => apiClient.get(API_ENDPOINTS.MENTORS, { params }),
  getById: (id) => apiClient.get(`${API_ENDPOINTS.MENTORS}/${id}`),
  getMentees: () => apiClient.get(`${API_ENDPOINTS.MENTORS}/mentees`),
};
