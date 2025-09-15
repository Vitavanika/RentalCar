import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBrands } from './redux/filters/filtersOperations';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CarDetailsPage from './pages/CarDetailsPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/catalog/:carId" element={<CarDetailsPage />} />
    </Routes>
  );
}

export default App;
