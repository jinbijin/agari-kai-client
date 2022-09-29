import { Pipe, PipeTransform } from '@angular/core';
import { VersionStatus } from 'src/app/core/pwa/version-status.type';

@Pipe({
  name: 'toIcon',
})
export class StatusToIconPipe implements PipeTransform {
  transform(value: VersionStatus): string {
    switch (value) {
      case VersionStatus.Loading:
        return 'downloading';
      case VersionStatus.Ready:
        return 'refresh';
      case VersionStatus.Failed:
        return 'error';
    }
  }
}
