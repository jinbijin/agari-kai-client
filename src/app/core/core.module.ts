import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MaterialConfigModule } from './material-config/material-config.module';
import { providersFromModule } from './providers-from-module';
import { PwaModule } from './pwa/pwa.module';
import { AGARI_ENVIRONMENT } from './tokens/environment.token';
import { WINDOW_LOCATION } from './tokens/location.token';

@NgModule({
  imports: [HttpClientModule, PwaModule, MaterialConfigModule],
  exports: [HttpClientModule, PwaModule],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...providersFromModule(PwaModule.forRoot()),
        ...providersFromModule(MaterialConfigModule.forRoot()),
        {
          provide: AGARI_ENVIRONMENT,
          useValue: environment,
        },
        {
          provide: WINDOW_LOCATION,
          useValue: location,
        },
      ],
    };
  }
}
