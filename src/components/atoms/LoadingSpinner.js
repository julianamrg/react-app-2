import React from 'react';

const LoadingSpinner = () => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh'
    }}>
        <div className="loader" />
        <p style={{ marginTop: 16, fontSize: 18, color: '#3273dc' }}>Cargando...</p>
        <style>
            {`
            .loader {
                border: 6px solid #f3f3f3;
                border-top: 6px solid #3273dc;
                border-radius: 50%;
                width: 48px;
                height: 48px;
                animation: spin 1s linear infinite;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            `}
        </style>
    </div>
);

export default LoadingSpinner;