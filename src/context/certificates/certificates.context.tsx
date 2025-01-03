import { createContext, ReactNode, useReducer } from 'react';
import {
  certificatesReducer,
  INITIAL_CERTIFICATES_STATE
} from '../../reducers/certificates/certificates.reducer';
import { certificatesActions } from '../../reducers/certificates/certificates.actions';
import { getGoodList } from '../../api';
import { Certificate } from '../../types/certificate.interface';
import { CertificatesEntitiesStatus } from '../../reducers/certificates/certificates.types';
import { AxiosError } from 'axios';
import { ICertificatesContext } from './certificatesContext.types';
import { mapCertDTOToClient } from '../../utils/mappers.utils';

export const CertificatesContext = createContext<ICertificatesContext>({
  certificatesState: INITIAL_CERTIFICATES_STATE
});

export const CertificatesContextProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [certificatesState, dispatch] = useReducer(
    certificatesReducer,
    INITIAL_CERTIFICATES_STATE
  );

  const setChosenCert = (certId: number) =>
    dispatch(certificatesActions.setChoosenCert(certId));

  const setStatus = (status: CertificatesEntitiesStatus) =>
    dispatch(certificatesActions.setStatus(status));

  const setErrorMessage = (errMessage: string) =>
    dispatch(certificatesActions.setErrorMessage(errMessage));

  const clearErrorMessage = () =>
    dispatch(certificatesActions.clearErrorMessage());

  const loadCertificates = async () => {
    clearErrorMessage();
    setStatus('loading');

    try {
      const certificatesDTO = await getGoodList();
      const certificates = certificatesDTO.map(mapCertDTOToClient);

      dispatch(certificatesActions.setCertificates(certificates));
      setStatus('received');
    } catch (err) {
      setStatus('error');

      if (err instanceof AxiosError) {
        setErrorMessage(err.message);
        return;
      }

      setErrorMessage('Произошла ошибка');
    }
  };

  return (
    <CertificatesContext.Provider
      value={{
        certificatesState,
        loadCertificates,
        setChosenCert,
        setErrorMessage,
        clearErrorMessage
      }}
    >
      {children}
    </CertificatesContext.Provider>
  );
};
