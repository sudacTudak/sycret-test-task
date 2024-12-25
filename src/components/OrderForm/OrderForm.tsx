import styles from './OrderForm.module.scss';
import cn from 'classnames';
import { OrderFormProps } from './OrderForm.props';
import { Controller, useFormContext } from 'react-hook-form';
import { OrderFormData } from './OrderForm.types';
import { InputField } from '../TextFields/InputField';
import { TextArea } from '../TextFields/TextArea';

export const OrderForm = ({ className, ...props }: OrderFormProps) => {
  const {
    register,
    formState: { errors },
    control
  } = useFormContext<OrderFormData>();

  const handlePhoneChange = (
    value: string,
    onChange: (value: string) => void
  ) => {
    const onlyDigits = value.replace(/[^0-9+\-()\s_]/g, '');
    onChange(onlyDigits);
  };

  return (
    <form className={cn(styles['form'], className)} {...props}>
      <InputField
        error={errors.clientName?.message}
        label="ФИО"
        placeholder="Введите Ваше ФИО..."
        required
        {...register('clientName')}
      />
      <Controller
        name="phone"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputField
            {...field}
            label="Номер телефона"
            placeholder="+79998887766"
            error={errors.phone?.message}
            required
            onChange={(e) => handlePhoneChange(e.target.value, field.onChange)}
          />
        )}
      />
      <TextArea
        error={errors.message?.message}
        label="Сообщение"
        placeholder="Введите Ваше сообщение..."
        {...register('message')}
      />
      <InputField
        error={errors.email?.message}
        label="Email"
        placeholder="example@mail.com"
        required
        {...register('email')}
      />
    </form>
  );
};
