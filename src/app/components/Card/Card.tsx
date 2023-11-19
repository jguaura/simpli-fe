"use client";
import { Bike } from '@/core/models/bikes.model';
import styles from './card.module.css';
import Image from 'next/image';
import { Kanit } from 'next/font/google';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

interface CardProps {
  product: Bike;
}

const kanit = Kanit({ weight: ['400', '600', '700'], subsets: ['latin'] });

function Card({ product }: CardProps) {
  const { name, description, price, image } = product;
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
          <span>More info</span>
           <MdOutlineArrowRightAlt />
        </button>
      </div>
    </div>
  );
}

export default Card;
