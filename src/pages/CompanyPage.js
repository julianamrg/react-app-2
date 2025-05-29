import React, { useContext, useState } from 'react';
import { GlobalStateContext, useGlobalState } from '../contexts/GlobalStateContext';
import CompanyForm from '../components/organisms/CompanyForm';
import { CompanyTable } from './CompanyTable';

const CompanyPage = () => {
    // const { user } = useGlobalState();
    // const [message, setMessage] = useState('');

    // const handleFormSubmit = (data) => {
    //     if (user.role === 'admin') {
    //         // Logic to handle company data submission
    //         // For now, we can just log the data
    //         console.log('Company Data Submitted:', data);
    //         setMessage('Company information submitted successfully!');
    //     } else {
    //         setMessage('You do not have permission to submit this form.');
    //     }
    // };

    return (
        <>
            

            <CompanyTable/>
            {/* {user.role === 'admin' ? (
                <CompanyForm onSubmit={handleFormSubmit} />
            ) : (
                <p>You must be an administrator to access this page.</p>
            )}
            {message && <p>{message}</p>} */}
        </>
    );
};

export default CompanyPage;