import styles from './CardsBlock.module.css';
import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/cars/carsSelectors';
import { CarCard } from '../CarCard/CarCard';
import LoadMore from '../LoadMore/LoadMore';

const CardsBlock = () => {
  const cars = useSelector(selectCars);

  return (
    <div className={styles.cardsBlock}>
      <div className={styles.gallery}>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      <LoadMore />
    </div>
  );
};

export default CardsBlock;
