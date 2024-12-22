import { createBrowserRouter, Outlet } from 'react-router-dom';
import { APP_ROUTES } from './index';
import { FormPage } from './../pages/FormPage/FormPage';
import { PaymentPage } from './../pages/PaymentPage/PaymentPage';
import { NotFoundPage } from './../pages/NotFoundPage/NotFoundPage';
import { HomePage } from './../pages/HomePage/HomePage';
import { MainLayout } from '../layout/MainLayout/MainLayout';

export const appRouter = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: APP_ROUTES.HOMEPAGE,
        element: <HomePage />
      },
      {
        path: APP_ROUTES.ORDER_FORM_PAGE,
        element: <FormPage />
      },
      {
        path: APP_ROUTES.PAYMENT_PAGE + '/:certNumber',
        element: <PaymentPage />
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]);
