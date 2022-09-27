import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  exports: [ServiceWorkerModule],
})
export class PwaModule {}
