import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, TitleStrategy } from '@angular/router';
import { UnderConstructionComponent } from '../modules/under-construction/under-construction.component';
import { PROVIDE_AGARI_NAVIGATION_ITEMS } from './agari-navigation-items.token';
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
    PROVIDE_AGARI_NAVIGATION_ITEMS,
  ],
})
export class AgariRoutingModule {}
