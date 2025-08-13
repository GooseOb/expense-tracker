import styles from './DatePicker.module.css';

export const DatePicker = (
  props: React.InputHTMLAttributes<HTMLInputElement>
) => {
  return <input type="date" className={styles.picker} {...props} />;
};
