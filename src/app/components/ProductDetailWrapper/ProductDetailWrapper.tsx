import { Product } from '@/core/models/product.model';
import Image from 'next/image';
import styles from './ProductDetailWrapper.module.css';
import { Kanit } from 'next/font/google';
import { removeCloudinaryTransformations } from '@/app/utils/utils';

interface ProductDetailProps {
  product: Product;
}

const kanit = Kanit({ weight: ['400', '600', '700'], subsets: ['latin'] });

function ProductDetailWrapper({ product }: ProductDetailProps) {
  const { image, name, description, price } = product;

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={removeCloudinaryTransformations(image)}
          alt={name}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className={styles.content}>
        <div>
          <h3 className={kanit.className}>{name}</h3>
          <h6>{price}</h6>
        </div>
        <div className={styles.buttons}>
          <button>Add to cart</button>
          <button>Get more info</button>
        </div>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default ProductDetailWrapper;