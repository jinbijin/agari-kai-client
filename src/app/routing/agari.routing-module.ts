import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, ROUTES, TitleStrategy } from '@angular/router';
import { providersFromModule } from '../core/providers-from-module';
import { AgariSidebarComponent } from '../modules/sidebar/sidebar.component';
import { SidebarModule } from '../modules/sidebar/sidebar.module';
import { AgariTitleRenderer } from './agari.title-renderer';
import { AgariTitleStrategy } from './agari.title-strategy';
import { PROVIDE_AGARI_NAVIGATION_ITEMS } from './tokens/agari-navigation-items.token';
import { AGARI_ROUTES, PROVIDE_AGARI_ROUTES } from './tokens/agari-routes.token';

@NgModule({
  imports: [RouterModule, SidebarModule],
  exports: [RouterModule],
})
export class AgariRoutingModule {
  static forRoot(): ModuleWithProviders<AgariRoutingModule> {
    return {
      ngModule: AgariRoutingModule,
      providers: [
        ...providersFromModule(RouterModule.forRoot([{ path: '', outlet: 'left', component: AgariSidebarComponent }])),
        AgariTitleRenderer,
        { provide: TitleStrategy, useClass: AgariTitleStrategy },
        { provide: ROUTES, useExisting: AGARI_ROUTES, multi: true },
        PROVIDE_AGARI_ROUTES,
        PROVIDE_AGARI_NAVIGATION_ITEMS,
      ],
    };
  }
}
