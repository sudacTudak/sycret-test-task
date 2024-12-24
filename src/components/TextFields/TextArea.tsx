import styles from './TextField.module.scss';
import cn from 'classnames';
import { TextAreaProps } from './TextArea.props';

export const TextArea = ({
  className,
  label,
  error,
  required,
  ...props
}: TextAreaProps) => {
  return (
    <label
      className={cn(styles['field'], className, {
        [styles['field_error']]: error
      })}
    >
      {label && (
        <span className={styles['field__label']}>
          {label}
          {required && <span className={styles['field__star']}>&nbsp;*</span>}
        </span>
      )}
      <textarea className={cn(styles['field__textarea'])} {...props} />
      {error && <span className={styles['field__error-msg']}>{error}</span>}
    </label>
  );
};
