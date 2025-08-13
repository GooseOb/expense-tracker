import styles from './Button.module.css';

export const Button = ({
  variant = 'primary',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'round' | 'ghost';
}) => {
  return <button className={styles[variant]} {...props}></button>;
};
