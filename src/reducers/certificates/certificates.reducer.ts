import { CERTIFICATES_ACTIONS } from './certificates.types';
import {
  CertificatesActionTypes,
  CertificatesState
} from './certificates.types';

export const INITIAL_CERTIFICATES_STATE: CertificatesState = {
  certificatesData: {
    entities: [],
    status: 'idle',
    errorMessage: null
  },
  choosenCertificate: null
};

export const certificatesReducer = (
  state: CertificatesState,
  action: CertificatesActionTypes
) => {
  switch (action.type) {
    case CERTIFICATES_ACTIONS.SET_CERTIFICATES: {
      const entities = action.payload.certificates;
      return {
        ...state,
        certificatesData: {
          ...state.certificatesData,
          entities
        }
      };
    }

    case CERTIFICATES_ACTIONS.SET_CHOOSEN_CERT: {
      const choosenCertificate = action.payload.cert;
      return {
        ...state,
        choosenCertificate
      };
    }
    case CERTIFICATES_ACTIONS.SET_STATUS: {
      const status = action.payload.status;
      return {
        ...state,
        certificatesData: {
          ...state.certificatesData,
          status
        }
      };
    }
    case CERTIFICATES_ACTIONS.SET_ERR_MSG: {
      const errorMessage = action.payload.errMessage;
      return {
        ...state,
        certificatesData: {
          ...state.certificatesData,
          errorMessage
        }
      };
    }
    case CERTIFICATES_ACTIONS.CLEAR_ERR_MGS: {
      return {
        ...state,
        certificatesData: {
          ...state.certificatesData,
          errorMessage: INITIAL_CERTIFICATES_STATE.certificatesData.errorMessage
        }
      };
    }
  }
};
