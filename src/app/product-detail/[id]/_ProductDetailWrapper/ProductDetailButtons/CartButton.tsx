'use client';
import { useProductsContext } from '@/app/context/products.context';
import { Product } from '@/app/core/models/product.model';
import React from 'react';

interface Test {
  product: Product;
}

function CartButton({ product }: Test) {
  const { setProducts } = useProductsContext();

  const handleSetProduct = () => {
    setProducts(prevProducts => {
      if (!prevProducts || !prevProducts.some(existingProduct => existingProduct._id === product._id)) {
        return [...(prevProducts || []), product];
      }
      return prevProducts || [];
    });
  };

  return (
    <>
      <button onClick={handleSetProduct}>Add to cart </button>
    </>
  );
}

export default CartButton;
