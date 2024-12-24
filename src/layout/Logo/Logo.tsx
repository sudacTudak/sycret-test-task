import styles from './Logo.module.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { LogoProps } from './Logo.props';
import { APP_ROUTES } from '../../routes';

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link to={APP_ROUTES.HOMEPAGE} className={cn(styles['logo'], className)}>
      Sycret
    </Link>
  );
};
