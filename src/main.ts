import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AgariComponent } from './app/agari.component';
import { AgariRoutingModule } from './app/routing/agari.routing-module';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AgariComponent, { providers: [importProvidersFrom(AgariRoutingModule)] }).catch(console.error);
