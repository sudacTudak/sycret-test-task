import styles from './TextField.module.scss';
import cn from 'classnames';
import { InputFieldProps } from './InputField.props';
import { forwardRef } from 'react';

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, label, error, required, ...props }, ref) => {
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
        <input ref={ref} className={cn(styles['field__input'])} {...props} />
        {error && <span className={styles['field__error-msg']}>{error}</span>}
      </label>
    );
  }
);
