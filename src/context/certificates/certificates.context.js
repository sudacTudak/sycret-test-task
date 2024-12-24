import { createContext, useReducer } from 'react';
import {
  certificatesReducer,
  INITIAL_CERTIFICATES_STATE
} from '../../reducers/certificates/certificates.reducer';
import { certificatesActions } from '../../reducers/certificates/certificates.actions';
import { getGoodList } from '../../api';

export const CertificatesContext = createContext(INITIAL_CERTIFICATES_STATE);

export const CertificatesContextProvider = ({ children }) => {
  const [certificatesState, dispatch] = useReducer(
    certificatesReducer,
    INITIAL_CERTIFICATES_STATE
  );

  const setCertificates = (certificates) =>
    dispatch(certificatesActions.setCertificates(certificates));

  const setChoosenCert = (cert) =>
    dispatch(certificatesActions.setChoosenCert(cert));

  const setStatus = (status) => dispatch(certificatesActions.setStatus(status));

  const setErrorMessage = (errMessage) =>
    dispatch(certificatesActions.setErrorMessage(errMessage));

  const clearErrorMessage = () =>
    dispatch(certificatesActions.clearErrorMessage());

  const loadCertificates = async () => {
    try {
      clearErrorMessage();
      setStatus('loading');
      const certificates = await getGoodList();
      setCertificates(certificates);
      setStatus('received');
    } catch (err) {
      setErrorMessage(err.message);
      setStatus('error');
    }
  };

  return (
    <CertificatesContext.Provider
      value={{
        certificatesState,
        loadCertificates,
        setChoosenCert,
        setErrorMessage,
        clearErrorMessage
      }}
    >
      {children}
    </CertificatesContext.Provider>
  );
};
