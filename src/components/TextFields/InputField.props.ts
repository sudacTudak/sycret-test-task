import { InputHTMLAttributes } from 'react';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}
