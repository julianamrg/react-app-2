import axios from 'axios';

const API_URL = 'https://company-backend-lbp1.onrender.com/api'; // Replace with your actual API URL

// Crear una instancia de axios
const api = axios.create({
    baseURL: API_URL,
});

// Interceptor para agregar el token a todas las peticiones
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("AUTH_TOKEN");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Métodos usando la instancia de axios configurada
export const createCompany = async (companyData) => {
    try {
        const response = await api.post('/companies', companyData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createProduct = async (productData) => {
    try {
        const response = await api.post('/companies/1/products', productData);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const loginUser = async (credentials) => {
   
    try {
        console.log('response')
        const response = await api.post('/auth/login', credentials);
        // Guardar token y rol en localStorage
        localStorage.setItem('AUTH_TOKEN', response.data.token);
        localStorage.setItem('USER_ROLE', response.data.rol);
        return response;
    } catch (error) {
        throw error;
    }
};

export const registerUser = async (credentials) => {
   
    try {
        const response = await api.post('/auth/create-account', credentials);
        return response;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
};

export const validateUser = async () => {
    try {
        const response = await api.get('/auth/user');
        return response;
    } catch (error) {
        console.error('Error during validation:', error);
        throw error;
    }
};

export const fetchCompanies = async () => {
    try {
        const response = await api.get('/companies');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchProducts = async () => {
    try {
        const response = await api.get('/companies/1/products');
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const downloadInventoryPDF = async () => {
    try {
        const response = await api.get('/inventory/pdf', { responseType: 'blob' });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateCompany = async (companyId, companyData) => {
    try {
        const response = await api.put(`/companies/${companyId}`, companyData);
        return response.data;
    } catch (error) {
        throw error;
    }
};