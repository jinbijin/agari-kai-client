import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationDrawerComponent } from './navigation-drawer/navigation-drawer.component';
import { NavigationLinkComponent } from './navigation-link/navigation-link.component';

@NgModule({
  declarations: [NavigationLinkComponent, NavigationDrawerComponent],
  imports: [CommonModule],
  exports: [NavigationLinkComponent, NavigationDrawerComponent],
})
export class NavigationModule {}
