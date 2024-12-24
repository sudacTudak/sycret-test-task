import { useState } from 'react';
import styles from './Header.module.scss';
import cn from 'classnames';
import { Sidebar } from '../Sidebar/Sidebar';
import { Logo } from '../Logo/Logo';
import { useDisableScroll } from '../../hooks/useDisableScroll';
import { HeaderProps } from './Header.props';

export const Header = ({ className }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [disableScroll, enableScroll] = useDisableScroll();

  const handleBurgerBtnClick = () => {
    if (isMenuOpen) {
      enableScroll();
    } else {
      disableScroll();
    }
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className={cn(styles['header'], className)}>
      <Logo
        className={cn(styles['header__logo'], {
          [styles['is-menu-open']]: isMenuOpen
        })}
      />
      <button
        className={cn(styles['header__burger'], styles['icon-menu'], {
          [styles['is-active']]: isMenuOpen
        })}
        onClick={handleBurgerBtnClick}
      >
        <span></span>
      </button>
      <div
        className={cn(styles['header__menu'], styles['menu-header'], {
          [styles['is-open']]: isMenuOpen
        })}
      >
        <Sidebar />
      </div>
    </header>
  );
};
