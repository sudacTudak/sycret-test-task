import styles from './OrderForm.module.scss';
import cn from 'classnames';
import { OrderFormProps } from './OrderForm.props';
import { useFormContext } from 'react-hook-form';
import { OrderFormData } from './OrderForm.types';
import { InputField } from '../TextFields/InputField';
import { TextAreaField } from '../TextFields/TextAreaField';
import { PhoneField } from '../PhoneField/PhoneField';

export const OrderForm = ({ className, ...props }: OrderFormProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext<OrderFormData>();

  return (
    <form className={cn(styles['form'], className)} {...props}>
      <InputField
        error={errors.clientName?.message}
        label="ФИО"
        placeholder="Введите Ваше ФИО..."
        required
        {...register('clientName')}
      />
      <PhoneField
        name="phone"
        label="Номер телефона"
        error={errors.phone?.message}
        required
      />
      <TextAreaField
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
