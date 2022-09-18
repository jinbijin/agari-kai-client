import { RouterLinkActive } from '@angular/router';

export interface AgariNavigationItem {
  icon?: string;
  label: string;
  testId: string;
  routerLink: (string | number)[];
  routerLinkActiveOptions: RouterLinkActive['routerLinkActiveOptions'];
}
