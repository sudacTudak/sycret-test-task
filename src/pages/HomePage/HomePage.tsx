import { useEffect } from 'react';
import { CertificateList } from '../../components/CertificateList/CertificateList';
import { Heading } from '../../components/Heading/Heading';
import { useCertificatesContext } from '../../hooks/useCertificatesContext';
import styles from './HomePage.module.scss';

export const HomePage = () => {
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

  return (
    <main className={styles['home']}>
      <CertificateList
        certificates={certificatesData.entities}
        chosenCertId={chosenCertificate?.id}
        chooseCert={setChosenCert}
      />
    </main>
  );
};
