import { ClientCertificate } from '../../types/certificate.interface';
import {
  CERTIFICATES_ACTIONS,
  CertificatesEntitiesStatus,
  ClearErrorMessageActionType,
  SetChoosenCertActionType,
  SetErrorMessageActionType,
  SetSertificatesActionType,
  SetStatusActionType
} from './certificates.types';

export const certificatesActions = {
  setCertificates: (
    certificates: ClientCertificate[]
  ): SetSertificatesActionType => ({
    type: CERTIFICATES_ACTIONS.SET_CERTIFICATES,
    payload: {
      certificates
    }
  }),
  setChoosenCert: (cert: ClientCertificate): SetChoosenCertActionType => ({
    type: CERTIFICATES_ACTIONS.SET_CHOOSEN_CERT,
    payload: {
      cert
    }
  }),
  setStatus: (status: CertificatesEntitiesStatus): SetStatusActionType => ({
    type: CERTIFICATES_ACTIONS.SET_STATUS,
    payload: {
      status
    }
  }),
  setErrorMessage: (errMessage: string): SetErrorMessageActionType => ({
    type: CERTIFICATES_ACTIONS.SET_ERR_MSG,
    payload: {
      errMessage
    }
  }),
  clearErrorMessage: (): ClearErrorMessageActionType => ({
    type: CERTIFICATES_ACTIONS.CLEAR_ERR_MGS
  })
};
