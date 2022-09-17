import { UnderConstructionComponent } from '../modules/under-construction/under-construction.component';
import { AgariRoute } from './tokens/agari-route.type';

export const agariRoutes: AgariRoute[] = [
  { path: '', pathMatch: 'full', component: UnderConstructionComponent, data: { menu: { icon: 'home', label: 'Home' } } },
  {
    path: 'tournaments',
    component: UnderConstructionComponent,
    title: 'Tournaments',
    data: { menu: { icon: 'table_view', label: 'Tournaments' } },
  },
];
