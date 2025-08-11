import styles from './InputLabel.module.css';

export const InputLabel = (
  props: React.LabelHTMLAttributes<HTMLLabelElement> & {
    children?: React.ReactNode;
  }
) => {
  return <label className={styles.label} {...props}></label>;
};
