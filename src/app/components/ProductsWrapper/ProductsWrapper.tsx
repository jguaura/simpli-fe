import { Bike } from '@/core/models/bikes.model';
import Card from '../Card/Card';
import styles from './ProductsWrapper.module.css';
import CardSkeleton from '../CardSkeleton/CardSkeleton';

interface ProductsWrapperProps {
  bikes: Bike[];
}

function ProductsWrapper({ bikes }: ProductsWrapperProps) {
  if (!bikes) return <span>Error loading bikes</span>;
  return (
    <div className="products-container">
      {bikes.map((bike: Bike, index: number) => (
        <Card product={bike} key={index} />
      ))}
    </div>
  );
}

export default ProductsWrapper;
