import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarById } from '../redux/cars/carsOperations';
import { selectSelectedCar } from '../redux/cars/carsSelectors';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import RentalForm from '../components/RentalForm/RentalForm';
import styles from './CarDetailsPage.module.css';

const CarDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(selectSelectedCar);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  if (!car) return <p className={styles.loading}>Loading...</p>;

  return (
    <>
      <Header />
      <Layout>
        <div className={styles.wrapper}>
          {/* LEFT COLUMN */}
          <div className={styles.leftColumn}>
            <img
              src={car.img}
              alt={`${car.brand} ${car.model}`}
              className={styles.image}
            />
            <RentalForm />
          </div>

          {/* RIGHT COLUMN */}
          <div className={styles.rightColumn}>
            <h1 className={styles.title}>
              {car.brand} {car.model}, {car.year}
            </h1>
            <p className={styles.location}>{car.address}</p>
            <p className={styles.price}>${car.rentalPrice}</p>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Rental Conditions</h2>
              <ul className={styles.list}>
                {car.rentalConditions.map((cond, index) => (
                  <li key={index}>{cond}</li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Specifications</h2>
              <ul className={styles.list}>
                <li>Type: {car.type}</li>
                <li>Engine: {car.engineSize}</li>
                <li>Fuel Consumption: {car.fuelConsumption} L</li>
                <li>Mileage: {car.mileage.toLocaleString()} km</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Accessories</h2>
              <ul className={styles.list}>
                {car.accessories.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Functionalities</h2>
              <ul className={styles.list}>
                {car.functionalities.map((item, index) => (
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
