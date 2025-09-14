import styles from './MainButton.module.css';
import clsx from 'clsx';

export const MainButton = ({
  text = 'View Catalog',
  property1 = 'default',
  className = '',
  textClassName = '',
  ...props
}) => (
  <button
    className={clsx(styles.button, styles[property1], className)}
    {...props}
  >
    <span className={clsx(styles.text, textClassName)}>{text}</span>
  </button>
);
