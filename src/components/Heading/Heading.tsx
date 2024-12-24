import styles from './Heading.module.scss';
import cn from 'classnames';
import { HeadingProps } from './Heading.props';

export const Heading = ({
  level,
  className,
  children,
  ...props
}: HeadingProps) => {
  switch (level) {
    case 'h1': {
      return (
        <h1 className={cn(styles['h1'], className)} {...props}>
          {children}
        </h1>
      );
    }
    case 'h2': {
      return (
        <h2 className={cn(styles['h2'], className)} {...props}>
          {children}
        </h2>
      );
    }
    case 'h3': {
      return (
        <h3 className={cn(styles['h3'], className)} {...props}>
          {children}
        </h3>
      );
    }
  }
};
