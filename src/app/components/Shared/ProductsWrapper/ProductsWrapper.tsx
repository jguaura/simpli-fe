import Card from '../../UI/Card/Card';
import { Product } from '@/app/core/models/product.model';

interface ProductsWrapperProps {
  products: Product[];
}

function ProductsWrapper({ products }: ProductsWrapperProps) {
  if (!products) return <span>Error loading bikes</span>;
  return (
    <div className='products-container'>
      {products.map((product: Product, index: number) => (
        <Card product={product} key={index} />
      ))}
    </div>
  );
}

export default ProductsWrapper;
