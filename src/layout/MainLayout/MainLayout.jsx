import styles from './MainLayout.module.scss';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';

export const MainLayout = () => {
  return (
    <div className={styles['layout']}>
      <Header className={styles['layout__header']} />
      <div className={styles['layout__overlay']}>
        <div className={styles['layout__wrapper']}>
          <Sidebar className={styles['layout__sidebar']} />
          <div className={styles['layout__main']}>
            <Outlet />
          </div>
        </div>
      </div>
      <div className={styles['layout__footer']}>Sycret-test © 2024</div>
    </div>
  );
};
