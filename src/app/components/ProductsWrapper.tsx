import { Bike, Bikes } from '@/core/models/bikes.model';
import Card from './Card/Card';
import styles from './ProductsWrapper.module.css';
import { useState } from 'react';
import Spinner from './spinner';

interface ProductsWrapperProps {
  bikes: Bike[];
}

function ProductsWrapper({ bikes }: ProductsWrapperProps) {
  return (
    <div className={styles.container}>
      {bikes.map((bike: Bike, index: number) => (
        <Card product={bike} key={index} />
      ))}
    </div>
  );
}

export default ProductsWrapper;
