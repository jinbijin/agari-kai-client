import { InjectionToken, Provider } from '@angular/core';
import { UnderConstructionComponent } from 'src/app/modules/under-construction/under-construction.component';
import { AgariRoute } from './agari-route.type';

export const AGARI_ROUTES: InjectionToken<AgariRoute[]> = new InjectionToken<AgariRoute[]>('agari-routes');

const agariRoutes: AgariRoute[] = [
  { path: '', pathMatch: 'full', component: UnderConstructionComponent, data: { menu: { icon: 'home', label: 'Home', testId: 'home' } } },
  {
    path: 'tournaments',
    component: UnderConstructionComponent,
    title: 'Tournaments',
    data: { menu: { icon: 'table_view', label: 'Tournaments', testId: 'tournaments' } },
  },
];

export const PROVIDE_AGARI_ROUTES: Provider = { provide: AGARI_ROUTES, useValue: agariRoutes };
