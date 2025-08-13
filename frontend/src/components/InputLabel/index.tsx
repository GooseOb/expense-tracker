import styles from './InputLabel.module.css';

export const InputLabel = (
  props: React.LabelHTMLAttributes<HTMLLabelElement>
) => {
  return <label className={styles.label} {...props}></label>;
};
