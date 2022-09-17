import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, TitleStrategy } from '@angular/router';
import { UnderConstructionComponent } from '../modules/under-construction/under-construction.component';
import { AgariTitleRenderer } from './agari.title-renderer';
import { AgariTitleStrategy } from './agari.title-strategy';
import { PROVIDE_AGARI_NAVIGATION_ITEMS } from './tokens/agari-navigation-items.token';
import { AGARI_ROUTES, PROVIDE_AGARI_ROUTES } from './tokens/agari-routes.token';

@NgModule({
  imports: [RouterModule.forRoot([]), UnderConstructionComponent],
  exports: [RouterModule],
  providers: [
    AgariTitleRenderer,
    { provide: TitleStrategy, useClass: AgariTitleStrategy },
    { provide: ROUTES, useExisting: AGARI_ROUTES, multi: true },
    PROVIDE_AGARI_ROUTES,
    PROVIDE_AGARI_NAVIGATION_ITEMS,
  ],
})
export class AgariRoutingModule {}
