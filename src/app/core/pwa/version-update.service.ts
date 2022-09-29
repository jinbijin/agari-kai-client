import { inject, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { map, Observable } from 'rxjs';
import { IncomingVersion } from './incoming-version.type';
import { VersionStatus } from './version-status.type';

@Injectable()
export class VersionUpdateService {
  readonly #swUpdate = inject(SwUpdate);

  readonly incomingVersion$: Observable<IncomingVersion | undefined> = this.#swUpdate.versionUpdates.pipe(
    map((event) => {
      switch (event.type) {
        case 'NO_NEW_VERSION_DETECTED':
          return undefined;
        case 'VERSION_DETECTED':
          return {
            status: VersionStatus.Loading,
            version: this.#getVersion(event.version.appData),
          };
        case 'VERSION_READY':
          return {
            status: VersionStatus.Ready,
            version: this.#getVersion(event.latestVersion.appData),
          };
        case 'VERSION_INSTALLATION_FAILED':
          return {
            status: VersionStatus.Failed,
            version: this.#getVersion(event.version.appData),
          };
      }
    })
  );

  #getVersion(appData: object | undefined): string {
    return (appData as { version: string }).version;
  }
}
