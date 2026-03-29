import React from 'react';
import products from '../../../../data/products';
import ProductCard from '../ProductCard/ProductCard';
import './ProductsSection.scss'; 

function ProductsSection() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}  />
      ))}
    </div>
  );
}

export default ProductsSection;
