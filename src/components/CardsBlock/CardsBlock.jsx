import styles from './CardsBlock.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectIsLoading } from '../../redux/cars/carsSelectors';
import { fetchCars } from '../../redux/cars/carsOperations';
import CarCard from '../CarCard/CarCard';
import LoadMore from '../LoadMore/LoadMore';

const CardsBlock = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector((state) => state.cars.page);
  const totalPages = useSelector((state) => state.cars.totalPages);

  if (!Array.isArray(cars) || cars.length === 0) {
    return <p>No cars found.</p>;
  }

  return (
    <div className={styles.cardsBlock}>
      <div className={styles.gallery}>
        {cars.map((car) => (car ? <CarCard key={car.id} car={car} /> : null))}
      </div>
      {page < totalPages && (
        <LoadMore loading={isLoading} onClick={() => dispatch(fetchCars())} />
      )}
    </div>
  );
};

export default CardsBlock;
