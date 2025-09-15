import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarById } from '../redux/cars/carsOperations';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import RentalForm from '../components/RentalForm/RentalForm';
import styles from './CarDetailsPage.module.css';

const CarDetailsPage = () => {
  const { carId } = useParams();
  const dispatch = useDispatch();
  const { selectedCar, isLoading, error } = useSelector((state) => state.cars);

  useEffect(() => {
    if (carId) {
      dispatch(fetchCarById(carId));
    }
  }, [dispatch, carId]);

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!selectedCar) {
    return <div className={styles.notFound}>Car details not found.</div>;
  }

  return (
    <>
      <Header />
      <Layout>
        <div className={styles.wrapper}>
          {/* LEFT COLUMN */}
          <div className={styles.leftColumn}>
            <img
              src={selectedCar?.img}
              alt={`${selectedCar?.brand} ${selectedCar?.model}`}
              className={styles.image}
            />
            <RentalForm />
          </div>

          {/* RIGHT COLUMN */}
          <div className={styles.rightColumn}>
            <h1 className={styles.title}>
              {selectedCar?.brand} {selectedCar?.model}, {selectedCar?.year}
            </h1>
            <p className={styles.location}>{selectedCar?.address}</p>
            <p className={styles.price}>${selectedCar?.rentalPrice}</p>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Rental Conditions</h2>
              <ul className={styles.list}>
                {selectedCar?.rentalConditions.map((cond, index) => (
                  <li key={index}>{cond}</li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Specifications</h2>
              <ul className={styles.list}>
                <li>Type: {selectedCar?.type}</li>
                <li>Engine: {selectedCar?.engineSize}</li>
                <li>Fuel Consumption: {selectedCar?.fuelConsumption} L</li>
                <li>Mileage: {selectedCar?.mileage.toLocaleString()} km</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Accessories</h2>
              <ul className={styles.list}>
                {selectedCar?.accessories.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Functionalities</h2>
              <ul className={styles.list}>
                {selectedCar?.functionalities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CarDetailsPage;
