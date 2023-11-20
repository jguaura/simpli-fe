import styles from './CardSkeleton.module.css';
function CardSkeleton() {
  const skeletonImgStyles = `${styles.skeletonImg} ${styles.pulse}`;
  return (
    <div className={`${styles.skeleton}`}>
      <div className={skeletonImgStyles}></div>
      <div className={styles.skeletonContent}>
        <div className={styles.pulse}></div>
        <div className={styles.pulse}></div>
        <div className={styles.pulse}></div>
      </div>
    </div>
  );
}

export default CardSkeleton;
