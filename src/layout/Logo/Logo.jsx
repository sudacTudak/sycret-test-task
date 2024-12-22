import styles from './Logo.module.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';

export const Logo = ({ className }) => {
  return <Link className={cn(styles['logo'], className)}>Sycret</Link>;
};
