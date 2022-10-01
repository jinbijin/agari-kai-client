import { AgariRoute } from './tokens/agari-route.type';

export const routes: AgariRoute[] = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: async () => (await import('./home/home.routes')).routes,
    data: { menu: { icon: 'home', label: 'Home', testId: 'home' } },
  },
  {
    path: 'tournaments',
    loadChildren: async () => (await import('./tournaments/tournaments.routes')).routes,
    title: 'Tournaments',
    data: { menu: { icon: 'table_view', label: 'Tournaments', testId: 'tournaments' } },
  },
];
