import { InjectionToken, Provider } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AgariNavigationItem } from './agari-navigation-item.type';
import { AgariRoute } from './agari-route.type';
import { AGARI_ROUTES } from './agari-routes.token';

export const AGARI_NAVIGATION_ITEMS: InjectionToken<Observable<AgariNavigationItem[]>> = new InjectionToken<
  Observable<AgariNavigationItem[]>
>('agari-navigation-items');

function createNavigationItems(agariRoutes: AgariRoute[]): Observable<AgariNavigationItem[]> {
  return of(
    agariRoutes.map((agariRoute) => ({
      icon: agariRoute.data.menu.icon,
      label: agariRoute.data.menu.label,
      testId: `${agariRoute.data.menu.testId}`,
      routerLink: agariRoute.path ? ['/', agariRoute.path] : ['/'],
      routerLinkActiveOptions: { exact: agariRoute.pathMatch === 'full' },
    }))
  );
}

export const PROVIDE_AGARI_NAVIGATION_ITEMS: Provider = {
  provide: AGARI_NAVIGATION_ITEMS,
  useFactory: createNavigationItems,
  deps: [AGARI_ROUTES],
};
