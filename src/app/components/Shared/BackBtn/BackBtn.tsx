'use client';
import { useRouter } from 'next/navigation';
import { MdOutlineArrowBack } from 'react-icons/md';
import styles from './BackBtn.module.css';

function BackBtn() {
  const router = useRouter();
  return (
    <button className={styles.backBtn} onClick={() => router.back()}>
      <MdOutlineArrowBack />
      <span>Go back</span>
    </button>
  );
}

export default BackBtn;
