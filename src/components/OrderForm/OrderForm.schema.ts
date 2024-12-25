import * as yup from 'yup';

const PHONE_REGEX = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

export const orderFormSchema = yup.object({
  clientName: yup.string().required('ФИО должно быть заполнено'),
  phone: yup
    .string()
    .required('Номер телефона должен быть заполнен')
    .matches(PHONE_REGEX, 'Введите корректный номер'),
  message: yup.string(),
  email: yup
    .string()
    .required('Почта должна быть заполнена')
    .email('Неверный формат электронной почты')
});
