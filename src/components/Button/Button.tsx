import styles from './Button.module.scss';
import cn from 'classnames';
import { ButtonProps } from './Button.props';

export const Button = ({
  className,
  children,
  appearance,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        styles['button'],
        className,
        styles[`button_${appearance}`]
      )}
      {...props}
    >
      {children}
    </button>
  );
};
