'use client';
import { Popover, PopoverContent, PopoverTrigger } from '@/app/components/UI/BasePopover/BasePopover';
import { MdOutlineShoppingBasket } from 'react-icons/md';
import ShoppingCartItem from './ShoppingCartItem/ShoppingCartItem';
import styles from './ShoppingCart.module.css';
import { useProductsContext } from '@/app/context/products.context';

function ShoppingCart() {
  const { products, total } = useProductsContext();
  const ctaStyles = `${styles.button} btn`;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className={styles.cta} aria-label="shopping cart">
          {products?.length ? <div className={styles.dot}></div> : <></>}
          <MdOutlineShoppingBasket size="25" />
        </button>
      </PopoverTrigger>
      <PopoverContent className={styles.items}>
        {products && products.map((product, index) => <ShoppingCartItem product={product} key={index} />)}
        {total === 0 ? (
          <p>Your shopping cart is empty.</p>
        ) : (
          <div className={styles.footer}>
            <span>Total: ${total}</span>
            <button className={ctaStyles}>Buy now</button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}

export default ShoppingCart;
