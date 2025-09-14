import styles from './CarCard.module.css';
import { useNavigate } from 'react-router';
import { MainButton } from '../MainButton/MainButton';
import sprite from '../../assets/sprite.svg';

const CarCard = ({ car }) => {
  const navigate = useNavigate();
  if (!car || !car.id) return null;

  const {
    id,
    img,
    brand,
    model,
    year,
    rentalPrice,
    address,
    type,
    mileage,
    accessories,
    rentalCompany,
  } = car;

  const [city, country] = address?.split(',').slice(-2).map(part => part.trim()) || [];

  const handleReadMore = () => {
    navigate(`/catalog/${id}`);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div
          className={styles.imageContainer}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className={styles.favoriteIcon}>
            <svg width="16" height="16">
              <use href={`${sprite}#icon-heart`} />
            </svg>
          </div>
        </div>

        <div className={styles.cardInfo}>
          <div className={styles.titleRow}>
            <p className={styles.carTitle}>
              <span className={styles.carBrand}>{brand} </span>
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
              <div className={styles.detailItem}>{rentalCompany}</div>
            </div>

            <div className={styles.detailsRow}>
              <div className={styles.detailItem}>{type}</div>
              <span className={styles.separator}>|</span>
              <div className={styles.detailItem}>
                {mileage.toLocaleString()} km
              </div>
              <span className={styles.separator}>|</span>
              <div className={styles.detailItem}>{accessories?.[0]}</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <MainButton text="Read more" property1="default" onClick={handleReadMore} />
      </div>
    </div>
  );
};

export default CarCard;
