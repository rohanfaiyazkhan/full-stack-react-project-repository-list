import { Router, Request, Response, NextFunction } from 'express';
import axios from 'axios';
import getGithubApiUrl from '../utils/getGithubApiUrl';
import { debug as createDebug } from 'debug';
import { AppError } from './../models/AppError';

const debug = createDebug('api:repos');

export const repos = Router();

repos.get('/', async (_: Request, res: Response, next: NextFunction) => {
  res.header('Cache-Control', 'no-store');

  try {
    const result = await axios.get(getGithubApiUrl());
    res.status(200);
    
    res.json(result.data);
  } catch (err) {
    const errorMessage = 'Error trying to fetch repository information';

    debug(errorMessage);
    debug(err);

    next(new AppError(errorMessage, 500));
  }
});
