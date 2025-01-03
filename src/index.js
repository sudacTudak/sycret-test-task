import './styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './routes/appRouter';
import { CertificatesContextProvider } from './context/certificates/certificates.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CertificatesContextProvider>
      <RouterProvider router={appRouter} />
    </CertificatesContextProvider>
  </React.StrictMode>
);
