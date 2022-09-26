import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgariComponent } from './agari.component';
import { AgariSidebarComponent } from './modules/sidebar/sidebar.component';
import { AgariRoutingModule } from './routing/agari.routing-module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AgariComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgariRoutingModule,
    AgariSidebarComponent,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  bootstrap: [AgariComponent],
})
export class AgariModule {}
