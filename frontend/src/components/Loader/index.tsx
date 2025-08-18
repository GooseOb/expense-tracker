import loader from '@/assets/loader.svg';
import styles from './Loader.module.css';

export const Loader = () => {
  return <img src={loader} alt="Loading..." className={styles.loader} />;
};
