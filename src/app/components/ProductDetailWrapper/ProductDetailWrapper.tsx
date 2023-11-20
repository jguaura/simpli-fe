import { Product } from '@/core/models/product.model';
import Image from 'next/image';
import styles from './ProductDetailWrapper.module.css';
import { Kanit } from 'next/font/google';
import { removeCloudinaryTransformations } from '@/app/utils/utils';
import Link from 'next/link';
import { MdOutlineArrowBack } from "react-icons/md";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../Shared/Shadcn/BaseDialog/BaseDialog';
import InfoModalContent from './InfoModalContent/InfoModalContent';

interface ProductDetailProps {
  product: Product;
}

const kanit = Kanit({ weight: ['400', '600', '700'], subsets: ['latin'] });

function ProductDetailWrapper({ product }: ProductDetailProps) {
  const { image, name, description, price } = product;

  return (
    <>
      <button className={styles.backBtn}>
        <Link href='/'>
          <MdOutlineArrowBack />
          <span>Go back</span>
        </Link>
      </button>
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
            <Dialog>
              <DialogTrigger>Get more info</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Contact Information</DialogTitle>
                  <DialogDescription>
                    To provide you with details about the <strong>{name}</strong>, please
                    share your contact information with us.
                  </DialogDescription>
                </DialogHeader>
                <InfoModalContent />
              </DialogContent>
            </Dialog>
          </div>
          <span>{description}</span>
        </div>
      </div>
    </>
  );
}

export default ProductDetailWrapper;
