import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { NavigationLinkComponent } from './navigation-link/navigation-link.component';

@Component({
  standalone: true,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'aside[agariNavigationDrawer]',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.scss'],
  imports: [NavigationLinkComponent, IconComponent],
})
export class NavigationDrawerComponent {}
