import * as yup from 'yup';

const PHONE_REGEX =
  /^(?:\+7|8)\s?(?:\(\d{3}\)|\d{3})\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;

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
