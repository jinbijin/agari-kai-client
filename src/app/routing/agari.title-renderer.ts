import { Injectable } from '@angular/core';

const titlePrefix = 'agari-kai';

@Injectable()
export class AgariTitleRenderer {
  renderTitle(title: string | undefined): string {
    if (title === undefined) {
      return titlePrefix;
    }
    return `${titlePrefix} \u2013 ${title}`;
  }
}
