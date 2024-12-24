import { useEffect } from 'react';
import { CertificateList } from '../../components/CertificateList/CertificateList';
import { Heading } from '../../components/Heading/Heading';
import { useCertificatesContext } from '../../hooks/useCertificatesContext';
import styles from './HomePage.module.scss';
import cn from 'classnames';
import { Button } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../routes';

export const HomePage = () => {
  const navigate = useNavigate();
  const { certificatesState, loadCertificates, setChosenCert } =
    useCertificatesContext();
  const { certificatesData, chosenCertificate } = certificatesState;

  useEffect(() => {
    const fetchSertificates = async () => {
      if (!loadCertificates) {
        return;
      }
      await loadCertificates();
    };

    fetchSertificates();
  }, []);

  const handleBuyBtnClick = () => {
    if (!chosenCertificate) {
      return;
    }

    navigate(APP_ROUTES.ORDER_FORM_PAGE);
  };

  return (
    <main className={styles['home']}>
      <div className={styles['home__container']}>
        <div className={cn(styles['home__preview'], styles['home__column'])}>
          <Heading level="h1" className={styles['home__title']}>
            СПА-Центр №1 в Москве
          </Heading>
          <p className={styles['home__description']}>
            Полный ассортимент beauty услуг высочайшего качества и по
            демократическим ценам
          </p>
        </div>
        <div
          className={cn(
            styles['home__certificates'],
            styles['home__column'],
            styles['certificates']
          )}
        >
          <Heading level="h2">Выберите сертификат</Heading>
          <CertificateList
            certificates={certificatesData.entities}
            chosenCertId={chosenCertificate?.id}
            chooseCert={setChosenCert}
          />
          <div className={styles['certificates__actions']}>
            <div className={styles['certificates__sum']}>
              {chosenCertificate?.sum ?? 0}&nbsp;₽
            </div>
            <Button
              appearance="contained"
              disabled={chosenCertificate === null}
              onClick={handleBuyBtnClick}
            >
              Купить
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};
