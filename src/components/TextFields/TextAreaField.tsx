import styles from './TextField.module.scss';
import cn from 'classnames';
import { TextAreaFieldProps as TextAreaFieldProps } from './TextAreaField.props';
import { forwardRef } from 'react';

export const TextAreaField = forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldProps
>(({ className, label, error, required, ...props }, ref) => {
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
      <textarea
        ref={ref}
        className={cn(styles['field__textarea'])}
        {...props}
      />
      {error && <span className={styles['field__error-msg']}>{error}</span>}
    </label>
  );
});
