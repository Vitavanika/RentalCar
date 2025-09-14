import styles from './LoadMore.module.css';
import clsx from 'clsx';

const LoadMore = ({ loading = false, onClick }) => (
  <div className={styles.wrapper}>
    <button
      className={clsx(styles.button, loading && styles.disabled)}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (
        <span className={styles.loader}>
          <span className={styles.car}>🚗</span>
          <span>Loading...</span>
        </span>
      ) : (
        'Load more'
      )}
    </button>
  </div>
);

export default LoadMore;
