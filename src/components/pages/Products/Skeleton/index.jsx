import styles from "./skeleton.module.css";

const Skeleton = () => {
  return (
    <div className={styles.productCard}>
      <div className={styles.tabs}>
        <button className={`${styles.tabButton} ${styles.skeleton}`} />
        <button className={`${styles.tabButton} ${styles.skeleton}`} />
        <button className={`${styles.tabButton} ${styles.skeleton}`} />
      </div>
      <div className={styles.product__details}>
        <div className={styles.skeletonPrice}></div>
        <div className={styles.skeletonName}></div>
      </div>
      <div className={styles.tab__content}>
        <div className={styles.skeletonContent}></div>
      </div>
    </div>
  );
};

export default Skeleton;
