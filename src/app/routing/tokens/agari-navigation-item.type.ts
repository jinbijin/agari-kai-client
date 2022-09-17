import { RouterLinkActive } from '@angular/router';

export interface AgariNavigationItem {
  icon?: string;
  label: string;
  routerLink: (string | number)[];
  routerLinkActiveOptions: RouterLinkActive['routerLinkActiveOptions'];
}
