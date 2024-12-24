import { Certificate } from '../../types/certificate.interface';

export interface CertificateListProps {
  certificates: Certificate[];
  chooseCert?: (certId: number) => void;
  chosenCertId?: number;
  className?: string;
}
