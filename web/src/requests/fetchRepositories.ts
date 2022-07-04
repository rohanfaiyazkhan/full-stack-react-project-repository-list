import axios from 'axios';
import { Repo } from '../models/Repo';
import { getApiUrl } from '../utils/getApiUrl';

const apiUrl = getApiUrl();

export function fetchRepositories() {
  return axios.get<Repo[]>(apiUrl);
}
