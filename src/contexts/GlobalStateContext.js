import React, { createContext, useState } from 'react';
import { fetchCompanies, fetchProducts } from '../services/api';


const initialState = {
    user: null,
    companies: [],
    products: [],
};

const GlobalStateContext = createContext(initialState);

export const GlobalStateProvider = ({ children }) => {

    const [companies, setCompanies] = useState([]);
    const [products, setProducts] = useState([]);

    const getCompanies= async () => {
        try {
            const data = await fetchCompanies()
            setCompanies(data);
        } catch (error) {
            console.error('Error fetching companies:', error);
        }    
    
    }


    const getProducts= async () => {
        try {
            const data = await fetchProducts()
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }    
    
    }

    const logout = () => {
        localStorage.removeItem('AUTH_TOKEN');
        localStorage.removeItem('USER_ROLE');
        // Si tienes un estado de usuario, aquí lo puedes limpiar también
        // setUser(null);
        setCompanies([]);
        setProducts([]);
    };


    return (
        <GlobalStateContext.Provider value={{ 
            companies,
            getCompanies,
            products,
            getProducts,
            setCompanies,
            setProducts,
            logout,
            
        }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => {
    return React.useContext(GlobalStateContext);
};