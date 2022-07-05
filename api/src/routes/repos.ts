import { Router, Request, Response, NextFunction } from 'express';
import axios from 'axios';
import getGithubApiUrl from '../utils/getGithubApiUrl';
import { debug as createDebug } from 'debug';
import { AppError } from './../models/AppError';
import { Repo } from '../models/Repo';

const debug = createDebug('api:repos');

export const repos = Router();

repos.get('/', async (_: Request, res: Response, next: NextFunction) => {
  res.header('Cache-Control', 'no-store');

  try {
    const result = await axios.get<Repo[]>(getGithubApiUrl());

    const data = result.data;

    // Data should at least be an empty array. If it's undefined, something has gone wrong
    if (data === undefined) {
      next(new AppError('Repository data is empty', 404));
    }

    const filteredData = data.filter((repo) => !repo.fork);

    res.status(200);
    res.json(filteredData);
  } catch (err) {
    const errorMessage = 'Error trying to fetch repository information';

    debug(errorMessage);
    debug(err);

    next(new AppError(errorMessage, 500));
  }
});
