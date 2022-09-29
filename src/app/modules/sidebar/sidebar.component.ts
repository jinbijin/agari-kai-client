import { Component, inject } from '@angular/core';
import { VersionStatus } from 'src/app/core/pwa/version-status.type';
import { VersionUpdateService } from 'src/app/core/pwa/version-update.service';
import { AGARI_ENVIRONMENT } from 'src/app/core/tokens/environment.token';
import { AGARI_NAVIGATION_ITEMS } from 'src/app/routing/tokens/agari-navigation-items.token';

@Component({
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class AgariSidebarComponent {
  // TODO delay version status observable here
  readonly navigationItems$ = inject(AGARI_NAVIGATION_ITEMS);
  readonly versionStatusService = inject(VersionUpdateService);
  readonly currentVersion = inject(AGARI_ENVIRONMENT).version;

  reload(status: VersionStatus): void {
    if (status === VersionStatus.Ready) {
      location.reload();
    }
  }
}
