import { CertificatesState } from '../../reducers/certificates/certificates.types';
import { Certificate } from '../../types/certificate.interface';

export interface ICertificatesContext {
  certificatesState: CertificatesState;
  loadCertificates?: () => Promise<void>;
  setChosenCert?: (certId: number) => void;
  setErrorMessage?: (errorMessage: string) => void;
  clearErrorMessage?: () => void;
}
