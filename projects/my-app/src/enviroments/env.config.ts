// API

import { IEnvironment } from 'projects/my-library/src/lib/models-core/environment.model';
export const appVersion = require('./../../../../package.json').version as string;

export const devEnvironmentConfig: IEnvironment | any = {
    appVersion,
    jsonPlaceholder: {
        apiUrl: 'https://jsonplaceholder.typicode.com/'
    },
    ngxGithubDemo: {
      apiUrl: 'https://api.github.com'
    },
    ethVqi: {
        apiUrl: 'http://localhost:5001/api',
        coreUrl: 'http://localhost:5001/core',
        authUrl: 'http://localhost:5001/auth',
    },
    production: false,
    apiUrl: '',
    apiUrlWss: '',
    googleMapsApiKey: '',
};
