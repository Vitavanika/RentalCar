import styles from './CardsBlock.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectIsLoading } from '../../redux/cars/carsSelectors';
import { setPage } from '../../redux/cars/carsSlice';
import CarCard from '../CarCard/CarCard';
import LoadMore from '../LoadMore/LoadMore';

const CardsBlock = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector((state) => state.cars.page);
  const limit = useSelector((state) => state.cars.limit);

  const hasMore = cars && cars.length > 0 && cars.length % limit === 0;

  const handleLoadMore = () => {
    dispatch(setPage(page + 1));
  };

  if (!Array.isArray(cars)) {
    return <p>Loading cars...</p>;
  }

  if (cars.length === 0) {
    return <p>No cars found.</p>;
  }

  return (
    <div className={styles.cardsBlock}>
      <div className={styles.gallery}>
        {cars.map((car) => (car ? <CarCard key={car.id} car={car} /> : null))}
      </div>
      {hasMore && <LoadMore loading={isLoading} onClick={handleLoadMore} />}
    </div>
  );
};

export default CardsBlock;
