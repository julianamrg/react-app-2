import React from 'react';
import './ProductCard.css'; // Assuming you have a CSS file for styling

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-code">Código: {product.code}</p>
            <p className="product-features">Características: {product.features}</p>
            <div className="product-prices">
                {Object.entries(product.prices).map(([currency, price]) => (
                    <p key={currency}>
                        Precio en {currency}: {price}
                    </p>
                ))}
            </div>
            <p className="product-company">Empresa: {product.company}</p>
        </div>
    );
};

export default ProductCard;