import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataModule } from './data/data.module';
import { MaterialConfigModule } from './material-config/material-config.module';
import { providersFromModule } from './providers-from-module';
import { PwaModule } from './pwa/pwa.module';
import { DELAY_AND_HOLD_CONFIG } from './tokens/delay-and-hold-config.token';
import { AGARI_ENVIRONMENT } from './tokens/environment.token';
import { WINDOW_LOCATION } from './tokens/location.token';

@NgModule({
  imports: [HttpClientModule, DataModule, PwaModule, MaterialConfigModule],
  exports: [HttpClientModule, DataModule, PwaModule, MaterialConfigModule],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...providersFromModule(DataModule.forRoot()),
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
        {
          provide: DELAY_AND_HOLD_CONFIG,
          useValue: { delayFor: 400, holdFor: 500 },
        },
      ],
    };
  }
}
