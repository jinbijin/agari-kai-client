import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgariComponent } from './agari.component';
import { AgariSidebarComponent } from './modules/sidebar/sidebar.component';
import { AgariRoutingModule } from './routing/agari.routing-module';

@NgModule({
  declarations: [AgariComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AgariRoutingModule, AgariSidebarComponent],
  bootstrap: [AgariComponent],
})
export class AgariModule {}
