import styles from './Input.module.css';

export const Input = ({
  helperText,
  error = false,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  helperText?: string;
  error?: boolean;
}) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} {...props} />
      {error && <span className={styles.helper}>{helperText}</span>}
    </div>
  );
};
