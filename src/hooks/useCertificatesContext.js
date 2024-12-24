import { useContext } from 'react';
import { CertificatesContext } from '../context/certificates/certificates.context';

export const useCertificatesContext = () => useContext(CertificatesContext);
