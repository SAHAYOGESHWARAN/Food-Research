import axios from './axiosInstance';
import apiEndpoints from './apiEndpoints';

const register = async (userData) => {
  const response = await axios.post(apiEndpoints.register, userData);
  return response.data;
};

const login = async (credentials) => {
  const response = await axios.post(apiEndpoints.login, credentials);
  return response.data;
};

const getProfile = async (token) => {
  const response = await axios.get(apiEndpoints.users + '/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const authService = {
  register,
  login,
  getProfile,
};

export default authService;
