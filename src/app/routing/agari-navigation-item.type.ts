export interface AgariNavigationItem {
  icon?: string;
  label: string;
  routerLink: (string | number)[];
  routeExact: boolean;
}
