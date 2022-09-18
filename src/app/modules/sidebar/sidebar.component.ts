import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconComponent } from 'src/app/design/icon/icon.component';
import { NavigationModule } from 'src/app/design/navigation/navigation.module';
import { AGARI_NAVIGATION_ITEMS } from 'src/app/routing/tokens/agari-navigation-items.token';

@Component({
  standalone: true,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'aside[agariSidebar]',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [CommonModule, RouterModule, IconComponent, NavigationModule],
})
export class AgariSidebarComponent {
  readonly navigationItems$ = inject(AGARI_NAVIGATION_ITEMS);
}
