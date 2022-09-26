import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AgariComponent } from './agari.component';
import { AgariSidebarComponent } from './modules/sidebar/sidebar.component';
import { AgariRoutingModule } from './routing/agari.routing-module';

@NgModule({
  declarations: [AgariComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgariRoutingModule,
    AgariSidebarComponent,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  bootstrap: [AgariComponent],
})
export class AgariModule {}
