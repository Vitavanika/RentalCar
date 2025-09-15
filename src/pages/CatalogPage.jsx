import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../redux/cars/carsOperations';

import { selectCars, selectIsLoading } from '../redux/cars/carsSelectors';
import { selectFilters } from '../redux/filters/filtersSelectors';
import Header from '../components/Header/Header';
import Filters from '../components/Filters/Filters';
import CardsBlock from '../components/CardsBlock/CardsBlock';
import Layout from '../components/Layout/Layout';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector((state) => state.cars.page);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchCars({ page, filters }));
  }, [dispatch, page, filters]);

  return (
    <>
      <Header />
      <Layout>
        <Filters />
        <CardsBlock cars={cars} isLoading={isLoading} />
      </Layout>
    </>
  );
};

export default CatalogPage;
