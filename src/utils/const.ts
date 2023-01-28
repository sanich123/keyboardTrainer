export const ROUTES = {
  main: '/',
  game: '/game',
  cabinet: '/cabinet',
  demo: '/demo',
};

export const CARDS_ON_PAGE = 9;
export const COMMENTS_ON_PAGE = 3;

export const apiRoutes = {
  guitars: 'guitars',
  comments: 'comments',
  coupons: 'coupons',
  orders: 'orders',
} as const;

export const apiMethods = {
  post: 'POST',
} as const;

export const BASE_URL = 'https://guitar-shop.accelerator.pages.academy';

export const searchParams = {
  stringCount: 'stringCount',
  type: 'type',
  minPrice: 'price_gte',
  maxPrice: 'price_lte',
  sort: '_sort',
  direction: '_order',
  defaultSort: 'price',
  defaultDirection: 'asc',
  page: 'page_',
  similar: 'name_like',
} as const;


