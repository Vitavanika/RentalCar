import styles from './MainButton.module.css';

export const MainButton = ({
  text,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles[variant]}`}
    >
      {text}
    </button>
  );
};
