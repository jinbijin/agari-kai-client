import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationContentComponent } from './navigation-content/navigation-content.component';
import { NavigationDrawerComponent } from './navigation-drawer/navigation-drawer.component';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { NavigationLinkComponent } from './navigation-link/navigation-link.component';

@NgModule({
  declarations: [NavigationLinkComponent, NavigationDrawerComponent, NavigationHeaderComponent, NavigationContentComponent],
  imports: [CommonModule],
  exports: [NavigationLinkComponent, NavigationDrawerComponent, NavigationHeaderComponent, NavigationContentComponent],
})
export class NavigationModule {}
