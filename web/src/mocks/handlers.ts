import { rest } from 'msw';
import { getApiUrl } from '../utils/getApiUrl';
import mockData from '../data/repos.json';

const apiUrl = getApiUrl();

export const handlers = [
  rest.get(apiUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData));
  }),
];
