import { rest } from 'msw';
import { mockComments, mockGuitars } from '../../utils/mocks/mocks';

const handlers = [
  rest.get('https://guitar-shop.accelerator.pages.academy/guitars', (req, res, ctx) => res(ctx.json(mockGuitars))),
  rest.get('https://guitar-shop.accelerator.pages.academy/guitars/3/comments', (req, res, ctx) => res(ctx.json(mockComments))),
  rest.get('https://guitar-shop.accelerator.pages.academy/guitars/2/comments', (req, res, ctx) => res(ctx.json(mockComments))),
  rest.get('https://guitar-shop.accelerator.pages.academy/guitars/1/comments', (req, res, ctx) => res(ctx.json(mockComments))),
  rest.get('https://guitar-shop.accelerator.pages.academy/guitars/guitars/3', (req, res, ctx) => res(ctx.json(mockGuitars[2]))),
];

export { handlers };
