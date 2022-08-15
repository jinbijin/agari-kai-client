import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AgariRoutingModule } from './agari.routing-module';
import { AgariComponent } from './agari.component';

@NgModule({
  declarations: [AgariComponent],
  imports: [BrowserModule, AgariRoutingModule],
  providers: [],
  bootstrap: [AgariComponent],
})
export class AgariModule {}
