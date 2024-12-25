import styles from './PaymentPage.module.scss';
import { Heading } from '../../components/Heading/Heading';

export const PaymentPage = () => {
  return (
    <main className={styles['payment-page']}>
      <Heading level="h1">Оплата...</Heading>
    </main>
  );
};
