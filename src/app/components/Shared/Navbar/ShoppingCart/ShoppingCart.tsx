import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/app/components/UI/BasePopover/BasePopover';
import { MdOutlineShoppingBasket } from 'react-icons/md';
import ShoppingCartItem from './ShoppingCartItem/ShoppingCartItem';
import styles from './ShoppingCart.module.css';

function ShoppingCart() {
  const ctaStyles = `${styles.button} btn`
  return (
    <Popover>
      <PopoverTrigger aria-labelledby='shopping cart'>
        <MdOutlineShoppingBasket size='25' />
      </PopoverTrigger>
      <PopoverContent className={styles.items}>
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
        <div className={styles.footer}>
          <span>total: 282823</span>
          <button className={ctaStyles}>Buy now</button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ShoppingCart;
