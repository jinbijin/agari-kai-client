import { Pipe, PipeTransform } from '@angular/core';
import { VersionStatus } from 'src/app/core/pwa/version-status.type';

@Pipe({
  name: 'toColor',
})
export class StatusToColorPipe implements PipeTransform {
  transform(value: VersionStatus): string {
    return value === VersionStatus.Failed ? 'warn' : 'primary';
  }
}
