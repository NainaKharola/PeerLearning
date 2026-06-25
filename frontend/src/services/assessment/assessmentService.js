import { API_ENDPOINTS } from '../../constants/apiEndpoints.js';
import { apiClient } from '../api/apiClient.js';

export const assessmentService = {
  list: () => apiClient.get(API_ENDPOINTS.ASSESSMENTS),
  submit: (id, payload) => apiClient.post(`${API_ENDPOINTS.ASSESSMENTS}/${id}/submit`, payload),
  skillGap: () => apiClient.get(`${API_ENDPOINTS.ASSESSMENTS}/skill-gap`),
};
