import styles from './CarCard.module.css';
import { MainButton } from '../MainButton/MainButton';

export const CarCard = ({ car }) => {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    type,
    mileage,
    accessories,
  } = car;

  const [city, country] = address.split(',').map((part) => part.trim());

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div
          className={styles.imageContainer}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className={styles.favoriteIcon}>❤️</div>
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.titleRow}>
            <p className={styles.carTitle}>
              <span className={styles.carBrand}>{make} </span>
              <span className={styles.carModel}>{model}</span>
              <span className={styles.carYear}>, {year}</span>
            </p>
            <div className={styles.price}>${rentalPrice}</div>
          </div>
          <div className={styles.detailsContainer}>
            <div className={styles.detailsRow}>
              <div className={styles.detailItem}>{city}</div>
              <span className={styles.separator}>|</span>
              <div className={styles.detailItem}>{country}</div>
              <span className={styles.separator}>|</span>
              <div className={styles.detailItem}>{accessories[0]}</div>
            </div>
            <div className={styles.detailsRow}>
              <div className={styles.detailItem}>{type}</div>
              <span className={styles.separator}>|</span>
              <div className={styles.detailItem}>
                {mileage.toLocaleString()} km
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainButton text="Read more" property1="default" />
    </div>
  );
};

export default CarCard;
