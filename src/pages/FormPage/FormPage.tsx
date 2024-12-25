import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { OrderForm } from '../../components/OrderForm/OrderForm';
import { OrderFormData } from '../../components/OrderForm/OrderForm.types';
import styles from './FormPage.module.scss';
import { useCertificatesContext } from '../../hooks/useCertificatesContext';
import { APP_ROUTES } from '../../routes';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { orderFormSchema } from '../../components/OrderForm/OrderForm.schema';
import { useEffect, useState } from 'react';
import { Card } from '../../components/Card/Card';
import { Heading } from '../../components/Heading/Heading';
import { SaleData } from '../../types/sale-data.interface';
import {
  mapOrderedCertDTOToClient,
  mapSaleDataToParamsDTO
} from '../../utils/mappers.utils';
import { sendOrder } from '../../api';
import { AxiosError } from 'axios';
import Loader from '../../components/Loader/Loader';

export const FormPage = () => {
  const navigate = useNavigate();
  const { certificatesState } = useCertificatesContext();
  const { chosenCertificate } = certificatesState;
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const methods = useForm<OrderFormData>({
    mode: 'onBlur',
    resolver: yupResolver(orderFormSchema)
  });
  const {
    formState: { isValid },
    reset
  } = methods;

  useEffect(() => {
    if (!chosenCertificate) {
      navigate(APP_ROUTES.HOMEPAGE);
    }
  }, [chosenCertificate]);

  const onSubmit = async (data: OrderFormData) => {
    if (!chosenCertificate) {
      return;
    }
    setErrorMsg(null);

    const saleClientData = data;
    const { description, discount, imageUrl, name, ...saleCertData } =
      chosenCertificate;
    const saleData: SaleData = {
      ...saleClientData,
      ...saleCertData,
      ...{
        paymentTypeId: 2,
        useDelivery: 0
      }
    };
    const saleParamsDTO = mapSaleDataToParamsDTO(saleData);

    try {
      setIsLoading(true);
      const [orderedCertResponse] = await sendOrder(saleParamsDTO);
      setIsLoading(false);

      const orderedCert = mapOrderedCertDTOToClient(orderedCertResponse);
      const certNumber = orderedCert.certNumber;

      const navigationUrl = certNumber
        ? APP_ROUTES.PAYMENT_PAGE + `/${certNumber}`
        : APP_ROUTES.PAYMENT_PAGE;

      navigate(navigationUrl);
    } catch (err) {
      if (err instanceof AxiosError) {
        setErrorMsg('Ошибка: ' + err.message);
      }
    } finally {
      reset();
      setIsLoading(false);
    }
  };

  const goBack = () => {
    navigate(APP_ROUTES.HOMEPAGE);
  };

  return (
    <main className={styles['form-page']}>
      <div className={styles['form-page__container']}>
        {chosenCertificate && (
          <Card className={styles['form-page__card']}>
            <Heading level="h1" className={styles['form-page__cert-name']}>
              {chosenCertificate?.name}
            </Heading>
            {isLoading && <Loader size="small" />}
            {errorMsg && (
              <div className={styles['form-page__error']}>{errorMsg}</div>
            )}
            <FormProvider {...methods}>
              <OrderForm className={styles['form-page__form']} />
            </FormProvider>
            <div className={styles['form-page__rules']}>
              <Link
                to={APP_ROUTES.HOMEPAGE}
                className={styles['form-page__link']}
              >
                Правила покупки
              </Link>
            </div>
          </Card>
        )}
        <div className={styles['form-page__actions']}>
          <Button appearance="outlined" onClick={goBack}>
            Назад
          </Button>
          <Button
            appearance="contained"
            disabled={!chosenCertificate || !isValid}
            onClick={() => methods.handleSubmit(onSubmit)()}
          >
            Перейти к оплате
          </Button>
        </div>
      </div>
    </main>
  );
};
