import axios from 'axios';
import { config } from '../config';
import { Repo } from '../models/Repo';

const apiUrl =
  config.web.serverBaseUrl + ':' + config.web.serverPort + '/repos';

export function fetchRepositories() {
  return axios.get<Repo[]>(apiUrl);
}
