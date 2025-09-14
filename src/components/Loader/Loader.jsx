import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.overlay}>
    <div className={styles.spinner}>
      <span className={styles.car}>🚗</span>
      <span className={styles.text}>Loading...</span>
    </div>
  </div>
);

export default Loader;
