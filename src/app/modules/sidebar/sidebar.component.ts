import { Component, inject } from '@angular/core';
import { VersionStatus } from 'src/app/core/pwa/version-status.type';
import { VersionUpdateService } from 'src/app/core/pwa/version-update.service';
import { AGARI_ENVIRONMENT } from 'src/app/core/tokens/environment.token';
import { WINDOW_LOCATION } from 'src/app/core/tokens/location.token';
import { AGARI_NAVIGATION_ITEMS } from 'src/app/routing/tokens/agari-navigation-items.token';

@Component({
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class AgariSidebarComponent {
  // TODO delay version status observable here
  readonly #versionStatusService = inject(VersionUpdateService);
  readonly #location = inject(WINDOW_LOCATION);

  readonly navigationItems$ = inject(AGARI_NAVIGATION_ITEMS);
  readonly incomingVersion$ = this.#versionStatusService.incomingVersion$;
  readonly currentVersion = inject(AGARI_ENVIRONMENT).version;

  reload(status: VersionStatus): void {
    switch (status) {
      case VersionStatus.Ready:
        this.#location.reload();
        break;
      case VersionStatus.Failed:
        this.#versionStatusService.checkForUpdates();
        break;
    }
  }
}
