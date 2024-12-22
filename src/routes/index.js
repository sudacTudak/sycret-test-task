export const APP_ROUTES = {
  HOMEPAGE: '/',
  ORDER_FORM_PAGE: '/order-form',
  PAYMENT_PAGE: '/payment',
  MOCK_PATH: '/some-mock-path'
};

export const NAV_MENU_ROUTES = [
  { label: 'Главная', path: APP_ROUTES.HOMEPAGE, alias: 'homepage' },
  { label: 'Услуги', path: APP_ROUTES.MOCK_PATH, alias: 'services' },
  { label: 'Галерея', path: APP_ROUTES.MOCK_PATH, alias: 'gallery' },
  { label: 'Отзывы', path: APP_ROUTES.MOCK_PATH, alias: 'reviews' },
  { label: 'О нас', path: APP_ROUTES.MOCK_PATH, alias: 'about-us' }
];
