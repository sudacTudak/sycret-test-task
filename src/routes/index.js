export const APP_ROUTES = {
  HOMEPAGE: '/',
  ORDER_FORM_PAGE: '/order-form',
  PAYMENT_PAGE: '/payment'
};

export const NAV_MENU_ROUTES = [
  { label: 'Главная', path: APP_ROUTES.HOMEPAGE, alias: 'homepage' },
  { label: 'Услуги', path: '#', alias: 'services' },
  { label: 'Галерея', path: '#', alias: 'gallery' },
  { label: 'Отзывы', path: '#', alias: 'reviews' },
  { label: 'О нас', path: '#', alias: 'about-us' }
];
