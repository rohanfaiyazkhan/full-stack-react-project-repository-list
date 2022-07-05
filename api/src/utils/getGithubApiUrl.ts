import { config } from '../config';

// We don't need credentials, so the only request config that really is necessary is the URL
// Util for generating API url
export default function getGithubApiUrl(username = config.githubApi.username) {
  return `${config.githubApi.baseUrl}/users/${username}/repos`;
}
