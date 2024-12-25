import styles from './CertificateList.module.scss';
import cn from 'classnames';
import { CertificateListProps } from './CertificateList.props';
import { CertificateListItem } from '../CertificateListItem/CertificateListItem';

export const CertificateList = ({
  certificates,
  chooseCert,
  chosenCertId,
  className
}: CertificateListProps) => {
  const handleItemClick = (certId: number) => {
    if (!chooseCert) {
      return;
    }

    chooseCert(certId);
  };

  return (
    <ul className={cn(styles['certificate-list'], className)}>
      {certificates.map((cert) => {
        const { imageUrl, tableName, primaryKey, ...certData } = cert;
        return (
          <li
            className={cn(styles['certificate-list__item'], styles['item'], {
              [styles['chosen']]: chosenCertId && chosenCertId === certData.id
            })}
            key={certData.id}
          >
            <button
              className={styles['item__btn']}
              onClick={() => handleItemClick(certData.id)}
            >
              <CertificateListItem {...certData} />
            </button>
          </li>
        );
      })}
    </ul>
  );
};
