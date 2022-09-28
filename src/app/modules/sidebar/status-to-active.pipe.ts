import { Pipe, PipeTransform } from '@angular/core';
import { VersionStatus } from 'src/app/core/pwa/version-status.type';

@Pipe({
  name: 'toActive',
})
export class StatusToActivePipe implements PipeTransform {
  transform(value: VersionStatus): boolean {
    return value !== VersionStatus.Loading;
  }
}
