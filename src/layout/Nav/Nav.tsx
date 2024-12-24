import styles from './Nav.module.scss';
import { NAV_MENU_ROUTES } from '../../routes';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { NavProps } from './Nav.props';

export const Nav = ({ className }: NavProps) => {
  return (
    <nav className={cn(styles['nav'], className)}>
      <ul className={styles['nav__list']}>
        {NAV_MENU_ROUTES.map((navItem) => (
          <li key={navItem.alias} className={styles['nav__item']}>
            <NavLink
              to={navItem.path}
              className={({ isActive }) =>
                cn(styles['nav__link'], { [styles['active']]: isActive })
              }
            >
              {navItem.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
