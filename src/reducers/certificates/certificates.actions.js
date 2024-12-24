export const CERTIFICATE_ACTIONS = {
  SET_CERTIFICATES: 'SET_CERTIFICATES',
  SET_CHOOSEN_CERT: 'SET_CHOOSEN_CERT',
  SET_STATUS: 'SET_STATUS',
  SET_ERR_MSG: 'SET_ERR_MSG',
  CLEAR_ERR_MGS: 'CLEAR_ERR_MSG'
};

export const certificatesActions = {
  setCertificates: (certificates) => ({
    type: CERTIFICATE_ACTIONS.SET_CERTIFICATES,
    payload: {
      certificates
    }
  }),
  setChoosenCert: (cert) => ({
    type: CERTIFICATE_ACTIONS.SET_CHOOSEN_CERT,
    payload: {
      cert
    }
  }),
  setStatus: (status) => ({
    type: CERTIFICATE_ACTIONS.SET_STATUS,
    payload: {
      status
    }
  }),
  setErrorMessage: (errMessage) => ({
    type: CERTIFICATE_ACTIONS.SET_ERR_MSG,
    payload: {
      errMessage
    }
  }),
  clearErrorMessage: () => ({
    type: CERTIFICATE_ACTIONS.CLEAR_ERR_MGS
  })
};
