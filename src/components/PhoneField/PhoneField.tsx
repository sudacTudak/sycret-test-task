import cn from 'classnames';
import styles from './PhoneField.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';
import { PhoneFieldProps } from './PhoneField.props';

export const PhoneField = ({
  label,
  name,
  error,
  required = false
}: PhoneFieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <label
          className={cn(styles['field'], {
            [styles['field_error']]: error
          })}
        >
          {label && (
            <span className={styles['field__label']}>
              {label}
              {required && (
                <span className={styles['field__star']}>&nbsp;*</span>
              )}
            </span>
          )}
          <PatternFormat
            {...field}
            format="+7 (###) ###-##-##"
            mask="_"
            placeholder="+7 (___) ___-__-__"
          />
          {error && <span className={styles['field__error-msg']}>{error}</span>}
        </label>
      )}
    />
  );
};
