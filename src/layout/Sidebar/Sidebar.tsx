import styles from './Sidebar.module.scss';
import cn from 'classnames';
import { Nav } from '../Nav/Nav';
import { Logo } from '../Logo/Logo';
import { SidebarProps } from './Sidebar.props';

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div className={cn(styles['sidebar'], className)}>
      <Logo className={cn(styles['sidebar__logo'])} />
      <Nav className={styles['sidebar__nav']} />
    </div>
  );
};
