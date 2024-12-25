import { TextareaHTMLAttributes } from 'react';

export interface TextAreaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
}
