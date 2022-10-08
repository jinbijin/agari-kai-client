import { Route, Routes } from '@angular/router';
import { PageLayoutComponent } from './page-layout.component';

export function mainPageRoute(routes: Routes): Route {
  return { path: '', component: PageLayoutComponent, children: routes };
}
