import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MaterialConfigModule } from './material-config/material-config.module';
import { PwaModule } from './pwa/pwa.module';
import { AGARI_ENVIRONMENT } from './tokens/environment.token';

@NgModule({
  imports: [HttpClientModule, PwaModule, MaterialConfigModule.forRoot()],
  exports: [HttpClientModule, PwaModule],
  providers: [
    {
      provide: AGARI_ENVIRONMENT,
      useValue: environment,
    },
  ],
})
export class CoreModule {}
