import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgariComponent } from './agari.component';
import { CoreModule } from './core/core.module';
import { AgariRoutingModule } from './routing/agari.routing-module';

@NgModule({
  declarations: [AgariComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CoreModule.forRoot(), AgariRoutingModule.forRoot(), MatSidenavModule],
  bootstrap: [AgariComponent],
})
export class AgariModule {}
