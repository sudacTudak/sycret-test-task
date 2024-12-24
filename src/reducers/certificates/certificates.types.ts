import { Certificate } from '../../types/certificate.interface';

export type CertificatesEntitiesStatus =
  | 'idle'
  | 'loading'
  | 'received'
  | 'error';

export interface CertificatesState {
  certificatesData: {
    entities: Certificate[];
    status: CertificatesEntitiesStatus;
    errorMessage: string | null;
  };
  choosenCertificate: Certificate | null;
}

export enum CERTIFICATES_ACTIONS {
  SET_CERTIFICATES = 'SET_CERTIFICATES',
  SET_CHOOSEN_CERT = 'SET_CHOOSEN_CERT',
  SET_STATUS = 'SET_STATUS',
  SET_ERR_MSG = 'SET_ERR_MSG',
  CLEAR_ERR_MGS = 'CLEAR_ERR_MSG'
}

export type SetSertificatesActionType = {
  type: CERTIFICATES_ACTIONS.SET_CERTIFICATES;
  payload: {
    certificates: Certificate[];
  };
};

export type SetChoosenCertActionType = {
  type: CERTIFICATES_ACTIONS.SET_CHOOSEN_CERT;
  payload: {
    cert: Certificate;
  };
};

export type SetStatusActionType = {
  type: CERTIFICATES_ACTIONS.SET_STATUS;
  payload: {
    status: CertificatesEntitiesStatus;
  };
};

export type SetErrorMessageActionType = {
  type: CERTIFICATES_ACTIONS.SET_ERR_MSG;
  payload: {
    errMessage: string;
  };
};

export type ClearErrorMessageActionType = {
  type: CERTIFICATES_ACTIONS.CLEAR_ERR_MGS;
};

export type CertificatesActionTypes =
  | SetSertificatesActionType
  | SetChoosenCertActionType
  | SetStatusActionType
  | SetErrorMessageActionType
  | ClearErrorMessageActionType;
