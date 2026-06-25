import { API_ENDPOINTS } from '../../constants/apiEndpoints.js';
import { apiClient } from '../api/apiClient.js';

export const resourceService = {
  list: (params) => apiClient.get(API_ENDPOINTS.RESOURCES, { params }),
  getById: (id) => apiClient.get(`${API_ENDPOINTS.RESOURCES}/${id}`),
};
