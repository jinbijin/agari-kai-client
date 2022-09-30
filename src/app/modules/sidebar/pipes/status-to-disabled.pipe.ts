import { Pipe, PipeTransform } from '@angular/core';
import { VersionStatus } from 'src/app/core/pwa/version-status.type';

@Pipe({
  name: 'toDisabled',
})
export class StatusToDisabledPipe implements PipeTransform {
  transform(value: VersionStatus): boolean {
    return value !== VersionStatus.Ready;
  }
}
