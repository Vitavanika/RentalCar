import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { fetchCars } from '../redux/cars/carsOperations';
import { setPage, resetCars } from '../redux/cars/carsSlice';
import { selectCars, selectIsLoading } from '../redux/cars/carsSelectors';
import { setFilters } from '../redux/filters/filtersSlice';
import { selectFilters } from '../redux/filters/filtersSelectors';
import Header from '../components/Header/Header';
import Filters from '../components/Filters/Filters';
import CardsBlock from '../components/CardsBlock/CardsBlock';
import Layout from '../components/Layout/Layout';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const filtersRef = useRef(null);
  const inputRef = useRef(null);

  const page = useSelector((state) => state.cars.page);
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchCars({ page, filters }));
  }, [dispatch, page, filters]);

  useEffect(() => {
    if (location.state?.scrollTo === 'filters') {
      setTimeout(() => {
        if (filtersRef.current) {
          filtersRef.current.scrollIntoView({ behavior: 'smooth' });
          inputRef.current?.focus();
        }
      }, 100);
    }
  }, [location]);

  const handleLoadMore = () => {
    dispatch(setPage(page + 1));
  };

  const handleFilterSubmit = (newFilters) => {
    dispatch(resetCars());
    dispatch(setFilters(newFilters));
  };

  return (
    <>
      <Header />
      <Layout>
        <div ref={filtersRef}>
          <Filters inputRef={inputRef} onFilterSubmit={handleFilterSubmit} />
        </div>
        <CardsBlock cars={cars} />
        {cars && cars.length > 0 && !isLoading && (
          <button onClick={handleLoadMore}>Load More</button>
        )}
      </Layout>
    </>
  );
};

export default CatalogPage;
