import { Bike } from '@/core/models/bikes.model';
import Card from '../Card/Card';
import styles from './ProductsWrapper.module.css';
import CardSkeleton from '../CardSkeleton/CardSkeleton';
import { Product } from '@/core/models/product.model';

interface ProductsWrapperProps {
  products: Product[];
}

function ProductsWrapper({ products }: ProductsWrapperProps) {
  if (!products) return <span>Error loading bikes</span>;
  return (
    <div className="products-container">
      {products.map((product: Product, index: number) => (
        <Card product={product} key={index} />
      ))}
    </div>
  );
}

export default ProductsWrapper;
