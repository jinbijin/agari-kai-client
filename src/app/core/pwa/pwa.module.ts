import { ModuleWithProviders, NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { providersFromModule } from '../providers-from-module';
import { VersionUpdateService } from './version-update.service';

@NgModule({
  imports: [ServiceWorkerModule],
  exports: [ServiceWorkerModule],
})
export class PwaModule {
  static forRoot(): ModuleWithProviders<PwaModule> {
    return {
      ngModule: PwaModule,
      providers: [
        VersionUpdateService,
        ...providersFromModule(
          ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            registrationStrategy: 'registerWhenStable:30000',
          })
        ),
      ],
    };
  }
}
