import Link from 'next/link';
import styles from './thank-you.module.css';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

export default async function ThankYou() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <IoCheckmarkCircleOutline size="100" color={'#903df7'} />
        <h3>Contact Information Received! 🌟</h3>
        <p>We appreciate your trust and look forward to connecting with you soon. If you have any questions or need further assistance, feel free to reach out. Have a great day!</p>
        <button className="btn">
          <Link href={'/'}>Go to home</Link>
        </button>
      </div>
    </div>
  );
}
