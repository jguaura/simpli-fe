'use client';
import styles from './card.module.css';
import Image from 'next/image';
import { Kanit } from 'next/font/google';
import { MdOutlineArrowForward } from 'react-icons/md';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Product } from '@/app/core/models/product.model';

interface CardProps {
  product: Product;
}

const kanit = Kanit({ weight: ['400', '600', '700'], subsets: ['latin'] });

function Card({ product }: CardProps) {
  const { name, description, price, image, _id } = product;
  const route = usePathname();
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          fill
          alt={description}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className={styles.cardInfo}>
        <h6 className={styles.cardName}>{name}</h6>
        <div className={`${kanit.className}`}>{price}</div>
        <button>
          <Link href={`/product-detail/${route}-${_id}`}>
            <span>More info</span>
            <MdOutlineArrowForward />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Card;
