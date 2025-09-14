import styles from './Header.module.css';
import Layout from '../Layout/Layout';
import logo from '/logo.svg';
import { NavLink } from 'react-router';

const Header = () => (
  <header className={styles.header}>
    <Layout>
      <div className={styles.inner}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="RentalCar Logo" className={styles.logo} />
        </div>
        <nav className={styles.navigation}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Catalog
          </NavLink>
        </nav>
      </div>
    </Layout>
  </header>
);

export default Header;
