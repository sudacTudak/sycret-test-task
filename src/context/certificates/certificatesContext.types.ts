import { CertificatesState } from '../../reducers/certificates/certificates.types';
import { ClientCertificate } from '../../types/certificate.interface';

export interface ICertificatesContext {
  certificatesState: CertificatesState;
  loadCertificates: () => Promise<void>;
  setChoosenCert: (cert: ClientCertificate) => void;
  setErrorMessage: (errorMessage: string) => void;
  clearErrorMessage: () => void;
}
