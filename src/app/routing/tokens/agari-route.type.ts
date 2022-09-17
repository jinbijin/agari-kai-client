import { Route } from '@angular/router';

export interface AgariMenuData {
  icon?: string;
  label: string;
}

export interface AgariRouteData {
  menu: AgariMenuData;
}

export type AgariRoute = Route & { data: AgariRouteData };
