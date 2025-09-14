import styles from './RentalForm.module.css';

const RentalForm = () => {
  return (
    <form className={styles.form}>
      <h2 className={styles.formTitle}>Book your car now</h2>
      <p className={styles.formDescription}>Stay connected! We are always ready to help you.</p>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="date" required />
      <textarea placeholder="Comment" rows="4" />
      <button type="submit">Send</button>
    </form>
  );
};

export default RentalForm;
