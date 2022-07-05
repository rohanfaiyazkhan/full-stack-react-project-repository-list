import axios from 'axios';
import { Commit } from '../models/Commit';

export function fetchCommits(commitsUrl: string) {
  let url = commitsUrl;
  if (url.endsWith('{/sha}')) {
    url = url.slice(0, -6);
  }
  return axios.get<Commit[]>(url);
}
