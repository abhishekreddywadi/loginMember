import axios from 'axios';

const api = axios.create({
  baseURL: 'https://masterid.in',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/api/user/register', userData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getCountries = async () => {
  try {
    const response = await api.get('/api/country/all');
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getStates = async (countryId) => {
  try {
    const response = await api.get(`/api/country/${countryId}/states`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getCities = async (stateId) => {
  try {
    const response = await api.get(`/api/country/states/${stateId}/cities`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getGuardianRelations = async () => {
  try {
    const response = await api.get('/api/guardianrelations');
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const validateMasterUserId = async (masterUserId) => {
  try {
    const response = await api.get(`/api/user/validate-master-userid?masterUserId=${masterUserId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const sendOtp = async (data) => {
  const response = await api.post('/api/otp/send-otp', data);
  return response.data;
};

export const verifyOtp = async (data) => {
  const response = await api.post('/api/otp/verify-otp', data);
  return response.data;
};

export const validateRegistration = async (data) => {
  const response = await api.post('/api/user/validate-register', {
    ...data,
    isEmailVerified: false,
    isPhoneNumberVerified: false,
    validateRequest: true
  });
  return response.data;
};

export const getNamePrefixes = async () => {
  const response = await api.get('/api/nameprefixes');
  return response.data;
};

export const getDocumentTypes = async () => {
  const response = await api.get('/api/documentTypes');
  return response.data;
};

export default api;
