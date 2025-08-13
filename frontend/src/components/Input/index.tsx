import styles from './Input.module.css';
import { Icon, type IconProps } from '../Icon';

export const Input = ({
  helperText,
  error = false,
  leftIcon,
  rightIcon,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  helperText?: string;
  error?: boolean;
  leftIcon?: IconProps;
  rightIcon?: IconProps;
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['input-wrapper']}>
        {leftIcon && (
          <span className={styles['icon-left']}>
            <Icon size={16} {...leftIcon} />
          </span>
        )}
        <input className={styles.input} {...props} />
        {rightIcon && (
          <span className={styles['icon-right']}>
            <Icon size={16} {...rightIcon} />
          </span>
        )}
      </div>
      {error && <span className={styles.helper}>{helperText}</span>}
    </div>
  );
};
