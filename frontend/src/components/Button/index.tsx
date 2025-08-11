import styles from './Button.module.css';

export const Button = ({
  children,
  variant = 'primary',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  variant?: 'primary' | 'round' | 'ghost';
}) => {
  return (
    <button className={styles[variant]} {...props}>
      {children}
    </button>
  );
};
