import styles from './Sidebar.module.scss';
import cn from 'classnames';
import { Nav } from '../Nav/Nav';
import { Logo } from '../Logo/Logo';

export const Sidebar = ({ className }) => {
  return (
    <div className={cn(styles['sidebar'], className)}>
      <Logo className={cn(styles['sidebar__logo'])} />
      <Nav className={styles['sidebar__nav']} />
    </div>
  );
};
