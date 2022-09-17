import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, TitleStrategy } from '@angular/router';
import { of } from 'rxjs';
import { UnderConstructionComponent } from '../modules/under-construction/under-construction.component';
import { AgariNavigationItem } from './agari-navigation-item.type';
import { AGARI_NAVIGATION_ITEMS } from './agari-navigation-items.token';
import { AgariRoute } from './agari-route.type';
import { AGARI_ROUTES } from './agari-routes.token';
import { agariRoutes } from './agari.routes';
import { AgariTitleRenderer } from './agari.title-renderer';
import { AgariTitleStrategy } from './agari.title-strategy';

@NgModule({
  imports: [RouterModule.forRoot([]), UnderConstructionComponent],
  exports: [RouterModule],
  providers: [
    AgariTitleRenderer,
    { provide: TitleStrategy, useClass: AgariTitleStrategy },
    { provide: AGARI_ROUTES, useValue: agariRoutes },
    { provide: ROUTES, useExisting: AGARI_ROUTES, multi: true },
    {
      provide: AGARI_NAVIGATION_ITEMS,
      useFactory: (agariRoutes: AgariRoute[]) =>
        of(
          agariRoutes.map<AgariNavigationItem>((agariRoute) => ({
            icon: agariRoute.data.menu.icon,
            label: agariRoute.data.menu.label,
            routerLink: agariRoute.path ? ['/', agariRoute.path] : ['/'],
            routerLinkActiveOptions: { exact: agariRoute.pathMatch === 'full' },
          }))
        ),
      deps: [AGARI_ROUTES],
    },
  ],
})
export class AgariRoutingModule {}
