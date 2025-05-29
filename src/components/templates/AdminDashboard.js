import React from 'react';
import { useContext } from 'react';
import { GlobalStateContext } from '../../contexts/GlobalStateContext';
import CompanyForm from '../organisms/CompanyForm';
import ProductForm from '../organisms/ProductForm';
import InventoryTable from '../organisms/InventoryTable';

const AdminDashboard = () => {
    const { user } = useContext(GlobalStateContext);

    if (!user || user.role !== 'admin') {
        return <div>Accesso Denegado</div>;
    }

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <h2>Register Company</h2>
            {/* <CompanyForm /> */}
            <h2>Register Product</h2>
            <ProductForm />
            <h2>Inventory</h2>
            <InventoryTable />
        </div>
    );
};

export default AdminDashboard;