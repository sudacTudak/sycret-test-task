import classNames from 'classnames';
import styles from './Loader.module.scss';
import { LoaderProps } from './Loader.props';

function Loader({ size = 'large' }: LoaderProps) {
  return (
    <div className={styles['loader']}>
      <div
        className={classNames(
          styles['loader__circle'],
          styles[`loader__circle_${size}`]
        )}
      />
    </div>
  );
}

export default Loader;
