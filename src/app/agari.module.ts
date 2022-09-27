import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgariComponent } from './agari.component';
import { CoreModule } from './core/core.module';
import { AgariSidebarComponent } from './modules/sidebar/sidebar.component';
import { AgariRoutingModule } from './routing/agari.routing-module';

@NgModule({
  declarations: [AgariComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CoreModule, AgariRoutingModule, AgariSidebarComponent],
  bootstrap: [AgariComponent],
})
export class AgariModule {}
