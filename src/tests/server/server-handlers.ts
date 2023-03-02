import { rest } from 'msw';
import { BASE_URL } from '../../utils/const';
import { fakeResponse } from '../test-const';

export const handlers = [
  rest.get(`${BASE_URL}/races/johndoe@me.com`, (req, res, ctx) => res(ctx.json(fakeResponse))),
];

// export { handlers };
