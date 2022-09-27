import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VersionUpdateService } from 'src/app/core/pwa/version-update.service';
import { ButtonComponent } from 'src/app/design/button/button.component';
import { IconComponent } from 'src/app/design/icon/icon.component';
import { NavigationModule } from 'src/app/design/navigation/navigation.module';
import { AGARI_NAVIGATION_ITEMS } from 'src/app/routing/tokens/agari-navigation-items.token';
import { environment } from 'src/environments/environment';

@Component({
  standalone: true,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'aside[agariSidebar]',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [CommonModule, RouterModule, ButtonComponent, IconComponent, NavigationModule],
})
export class AgariSidebarComponent {
  readonly navigationItems$ = inject(AGARI_NAVIGATION_ITEMS);
  readonly versionStatusService = inject(VersionUpdateService);
  readonly currentVersion = environment.version;

  reload(): void {
    location.reload();
  }
}
