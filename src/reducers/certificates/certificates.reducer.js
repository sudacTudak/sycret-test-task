import { CERTIFICATE_ACTIONS } from './certificates.actions';

export const INITIAL_CERTIFICATES_STATE = {
  certificatesData: {
    entities: [],
    status: 'idle',
    errorMessage: null
  },
  choosenCertificate: null
};

export const certificatesReducer = (state, action) => {
  switch (action.type) {
    case CERTIFICATE_ACTIONS.SET_CERTIFICATES: {
      const entities = action.payload.certificates;
      return {
        ...state,
        certificatesData: {
          ...state.certificatesData,
          entities
        }
      };
    }

    case CERTIFICATE_ACTIONS.SET_CHOOSEN_CERT: {
      const choosenCertificate = action.payload.choosenCert;
      return {
        ...state,
        choosenCertificate
      };
    }
    case CERTIFICATE_ACTIONS.SET_STATUS: {
      const status = action.payload.status;
      return {
        ...state,
        certificatesData: {
          ...state.certificatesData,
          status
        }
      };
    }
    case CERTIFICATE_ACTIONS.SET_ERR_MSG: {
      const errorMessage = action.payload.errorMessage;
      return {
        ...state,
        certificatesData: {
          ...state.certificatesData,
          errorMessage
        }
      };
    }
    case CERTIFICATE_ACTIONS.CLEAR_ERR_MGS: {
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
