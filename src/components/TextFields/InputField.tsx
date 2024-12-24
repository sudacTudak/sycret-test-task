import styles from './TextField.module.scss';
import cn from 'classnames';
import { InputFieldProps } from './InputField.props';

export const InputField = ({
  className,
  label,
  error,
  required,
  ...props
}: InputFieldProps) => {
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
      <input className={cn(styles['field__input'])} {...props} />
      {error && <span className={styles['field__error-msg']}>{error}</span>}
    </label>
  );
};
