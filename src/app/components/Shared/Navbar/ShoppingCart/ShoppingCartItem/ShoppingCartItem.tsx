import Image from 'next/image';
import styles from './ShoppingCartItem.module.css';
import { Kanit } from 'next/font/google';
import { IoTrashOutline } from 'react-icons/io5';

const kanit = Kanit({ weight: ['400', '600', '700'], subsets: ['latin'] });

function ShoppingCartItem() {
  return (
    <div className={styles.item}>
      <div className={styles.itemContent}>
        <Image
          width={150}
          height={150}
          alt='alt'
          src={
            'https://res.cloudinary.com/jguaura/image/upload/c_fill,h_300,g_auto/v1700358843/simpli/sbq6v5enbqrsyck9hiq0.webp'
          }
        />
        <div className={styles.itemDetail}>
          <h6 className={kanit.className}>SPORTSTER® S</h6>
          <span>$17999</span>
        </div>
      </div>
      <button aria-label='delete shopping cart item'>
        <IoTrashOutline size='20' />
      </button>
    </div>
  );
}

export default ShoppingCartItem;
