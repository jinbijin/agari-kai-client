import config from '../../ngsw-config.json';

export const environment = {
  production: false,
  version: config.appData.version,
};

// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
