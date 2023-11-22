import { Product } from '@/app/core/models/product.model';
import InfoModal from '../InfoModal/InfoModal';
import CartButton from './CartButton';

interface ProductDetailButtonsProps {
  product: Product;
}

function ProductDetailButtons({ product }: ProductDetailButtonsProps) {
  return (
    <>
      <CartButton product={product} />
      <InfoModal productName={product.name} />
    </>
  );
}

export default ProductDetailButtons;
