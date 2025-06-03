const API_BASE_URL = process.env.REACT_APP_API_URL?.replace(/\/$/, '') || 'http://localhost:5000/api';

const apiEndpoints = {
  users: `${API_BASE_URL}/users`,
  login: `${API_BASE_URL}/users/login`,
  register: `${API_BASE_URL}/users/register`,
  products: `${API_BASE_URL}/products`,
  ingredients: `${API_BASE_URL}/ingredients`,
  commitments: `${API_BASE_URL}/commitments`,
  regulations: `${API_BASE_URL}/regulations`,
  subscriptions: `${API_BASE_URL}/subscriptions`,
  health: `${API_BASE_URL}/health`,
  marketInsights: `${API_BASE_URL}/market-insights`,
  studies: `${API_BASE_URL}/studies`,
  tutorials: `${API_BASE_URL}/tutorials`,
};

export default apiEndpoints;
