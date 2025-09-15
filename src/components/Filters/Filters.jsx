// src/components/Filters/Filters.jsx
import styles from './Filters.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setBrand,
  setPrice,
  setMileageFrom,
  setMileageTo,
} from '../../redux/filters/filtersSlice';
import {
  selectFilters,
  selectBrands,
} from '../../redux/filters/filtersSelectors';

const Filters = ({ inputRef }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const brands = useSelector(selectBrands);

  return (
    <div className={styles.container}>
      <div className={styles.itemsContainer}>
        {/* Brand select */}
        <select
          value={filters.brand}
          onChange={(e) => dispatch(setBrand(e.target.value))}
        >
          <option value="">Choose brand</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        {/* Price select */}
        <select
          value={filters.price}
          onChange={(e) => dispatch(setPrice(e.target.value))}
        >
          <option value="">Choose price</option>
          <option value="30">$30</option>
          <option value="40">$40</option>
        </select>

        {/* Mileage inputs */}
        <div className={styles.mileage}>
          <input
            type="number"
            placeholder="From"
            value={filters.mileageFrom}
            onChange={(e) => dispatch(setMileageFrom(e.target.value))}
            ref={inputRef}
          />
          <input
            type="number"
            placeholder="To"
            value={filters.mileageTo}
            onChange={(e) => dispatch(setMileageTo(e.target.value))}
          />
        </div>
      </div>
      <button className={styles.button}>Search</button>
    </div>
  );
};

export default Filters;
