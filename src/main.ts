import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AgariComponent } from './app/agari.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AgariComponent, { providers: [importProvidersFrom(RouterModule.forRoot([]))] }).catch(console.error);
