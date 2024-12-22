import styles from './Header.module.scss';
import cn from 'classnames';

export const Header = ({ className }) => {
  return <header className={cn(styles['header'], className)}>Header</header>;
};
