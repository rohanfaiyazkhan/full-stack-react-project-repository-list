import { config as dotenv } from 'dotenv-flow';

dotenv({ default_node_env: 'development', path: `${__dirname}/../` });

export const config = {
  server: {
    port: process.env.SERVER_PORT || '1234',
  },
  githubApi: {
    baseUrl: 'https://api.github.com',
    username: 'silverorange',
  },
};
