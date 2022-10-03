import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Settings } from 'luxon';
import { AgariModule } from './app/agari.module';

import { environment } from './environments/environment';

Settings.defaultZone = 'utc';
Settings.defaultLocale = 'en';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AgariModule).catch(console.error);
