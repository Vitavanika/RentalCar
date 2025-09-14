import styles from './HeroSection.module.css';
import { useNavigate } from 'react-router';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/catalog', { state: { scrollTo: 'filters' } });
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>Find your perfect rental car</h1>
          <p className={styles.subtitle}>
            Reliable and budget-friendly rentals for any journey
          </p>
          <button className={styles.button} onClick={handleClick}>
            View Catalog
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
