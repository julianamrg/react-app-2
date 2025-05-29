import React, { useContext, useState } from 'react';
import { GlobalStateContext, useGlobalState } from '../contexts/GlobalStateContext';
import ProductForm from '../components/organisms/ProductForm';
import { ProductsTable } from './ProductsTable';

const ProductsPage = () => {
    // const { products, addProduct } = useGlobalState();
    // const [formData, setFormData] = useState({
    //     code: '',
    //     name: '',
    //     features: '',
    //     price: '',
    //     company: ''
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     addProduct(formData);
    //     setFormData({
    //         code: '',
    //         name: '',
    //         features: '',
    //         price: '',
    //         company: ''
    //     });
    // };

    return (
        <div>
           
            {/* <ProductForm 
                formData={formData} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
            /> */}

            <ProductsTable/>
            {/* <h2>Product List</h2> */}
            {/* <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default ProductsPage;