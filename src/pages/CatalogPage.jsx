import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { fetchCars } from '../redux/cars/carsOperations';
import Header from '../components/Header/Header';
import Filters from '../components/Filters/Filters';
import CardsBlock from '../components/CardsBlock/CardsBlock';
import Layout from '../components/Layout/Layout';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const filtersRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    if (location.state?.scrollTo === 'filters' && filtersRef.current) {
      setTimeout(() => {
        filtersRef.current.scrollIntoView({ behavior: 'smooth' });
        inputRef.current?.focus();
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Header />
      <Layout>
        <div ref={filtersRef}>
          <Filters inputRef={inputRef} />
        </div>
        <CardsBlock />
      </Layout>
    </>
  );
};

export default CatalogPage;
