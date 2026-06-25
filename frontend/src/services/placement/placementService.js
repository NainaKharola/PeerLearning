import { API_ENDPOINTS } from '../../constants/apiEndpoints.js';
import { apiClient } from '../api/apiClient.js';

export const placementService = {
  getRoadmap: () => apiClient.get(`${API_ENDPOINTS.PLACEMENT}/roadmap`),
  getCompanies: () => apiClient.get(`${API_ENDPOINTS.PLACEMENT}/companies`),
  getGuidance: () => apiClient.get(`${API_ENDPOINTS.PLACEMENT}/guidance`),
};
