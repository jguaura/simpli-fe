import Image from 'next/image';
import styles from './ShoppingCartItem.module.css';
import { Kanit } from 'next/font/google';
import { IoTrashOutline } from 'react-icons/io5';
import { Product } from '@/app/core/models/product.model';
import { useProductsContext } from '@/app/context/products.context';

const kanit = Kanit({ weight: ['400', '600', '700'], subsets: ['latin'] });

interface ShoppingCartItemProps {
  product: Product;
}

function ShoppingCartItem({ product }: ShoppingCartItemProps) {
  const { removeProduct } = useProductsContext()
  const { image, name, price, _id } = product;

  const handleProductRemove = () => {
    removeProduct(_id)
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemContent}>
        <Image width={150} height={150} alt='alt' src={image} />
        <div className={styles.itemDetail}>
          <h6 className={kanit.className}>{name}</h6>
          <span>${price}</span>
        </div>
      </div>
      <button onClick={handleProductRemove} aria-label='delete shopping cart item'>
        <IoTrashOutline size='20' />
      </button>
    </div>
  );
}

export default ShoppingCartItem;
