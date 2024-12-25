import styles from './CertificateListItem.module.scss';
import cn from 'classnames';
import { CertificateListItemProps } from './CertificateListItem.props';
import { Heading } from '../Heading/Heading';

export const CertificateListItem = ({
  name,
  price,
  sum,
  discount,
  className
}: CertificateListItemProps) => {
  return (
    <div className={cn(styles['certificate'], className)}>
      <Heading level="h3" className={styles['certificate__name']}>
        {name}
      </Heading>
      <div className={styles['certificate__info']}>
        <div className={cn(styles['certificates__cost'], styles['cost'])}>
          <div
            className={cn(styles['cost__sum'], {
              [styles['discount-sum']]: discount
            })}
          >
            {sum}&nbsp;₽
          </div>
          {discount && (
            <>
              <span className={styles['cost__divider']}>&nbsp;/&nbsp;</span>
              <div className={styles['cost__price']}>{price}&nbsp;₽</div>
            </>
          )}
        </div>
        {discount && (
          <div className={styles['certificate__discount']}>{discount}%</div>
        )}
      </div>
    </div>
  );
};
