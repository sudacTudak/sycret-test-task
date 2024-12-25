import { Link, useLocation } from 'react-router-dom';
import { Heading } from '../../components/Heading/Heading';
import styles from './NotFoundPage.module.scss';
import { APP_ROUTES } from '../../routes';

export const NotFoundPage = () => {
  const location = useLocation();
  return (
    <div className={styles['not-found']}>
      <Heading level="h1" className={styles['not-found__title']}>
        Страница не найдена
      </Heading>
      <p className={styles['not-found__text']}>
        Страница по адресу "{location.pathname}" не найдена
      </p>
      <Link to={APP_ROUTES.HOMEPAGE} className={styles['not-found__link']}>
        На главную
      </Link>
    </div>
  );
};
