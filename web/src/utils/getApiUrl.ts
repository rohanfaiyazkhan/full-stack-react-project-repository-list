import { config } from '../config';

export function getApiUrl() {
  return config.web.serverBaseUrl + ':' + config.web.serverPort + '/repos';
}
