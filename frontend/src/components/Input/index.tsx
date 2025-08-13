import styles from './Input.module.css';
import { Icon, type IconProps } from '../Icon';
import { useRef } from 'react';

const currencies = ['USD', 'EUR', 'PLN'];

export const Input = ({
  variant = 'primary',
  helperText,
  error = false,
  leftIcon,
  rightIcon,
  ref,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: 'primary' | 'money';
  helperText?: string;
  error?: boolean;
  leftIcon?: IconProps;
  rightIcon?: IconProps;
  ref?: React.RefObject<HTMLInputElement | null>;
}) => {
  const inputElement = useRef<HTMLInputElement>(null);
  if (!ref) {
    ref = inputElement;
  }

  const getHandler = (transform: (value: number) => number) => () => {
    ref.current!.value = transform(ref.current!.valueAsNumber || 0).toString();
  };
  const increment = getHandler(value => value + 1);
  const decrement = getHandler(value => value - 1);

  return (
    <div className={styles.wrapper}>
      <div className={styles['input-wrapper']}>
        {leftIcon && (
          <span className={styles['icon-left']}>
            <Icon size={16} {...leftIcon} />
          </span>
        )}
        {variant === 'money' ? (
          <>
            <input
              className={styles.input}
              type="number"
              ref={ref}
              {...props}
            />
            <select className={styles.currency}>
              {currencies.map(currency => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
            <span className={styles.arrows}>
              <button className={styles['arrow-button']} onClick={increment}>
                <Icon size={12} iconName="arrowNumeric" />
              </button>
              <button className={styles['arrow-button']} onClick={decrement}>
                <Icon size={12} iconName="arrowNumeric" />
              </button>
            </span>
          </>
        ) : (
          <>
            <input className={styles.input} {...props} />
            {rightIcon && (
              <span className={styles['icon-right']}>
                <Icon size={16} {...rightIcon} />
              </span>
            )}
          </>
        )}
      </div>
      {error && <span className={styles.helper}>{helperText}</span>}
    </div>
  );
};
