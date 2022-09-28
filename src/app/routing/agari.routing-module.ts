import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, TitleStrategy } from '@angular/router';
import { AgariSidebarComponent } from '../modules/sidebar/sidebar.component';
import { SidebarModule } from '../modules/sidebar/sidebar.module';
import { AgariTitleRenderer } from './agari.title-renderer';
import { AgariTitleStrategy } from './agari.title-strategy';
import { PROVIDE_AGARI_NAVIGATION_ITEMS } from './tokens/agari-navigation-items.token';
import { AGARI_ROUTES, PROVIDE_AGARI_ROUTES } from './tokens/agari-routes.token';

@NgModule({
  imports: [RouterModule.forRoot([{ path: '', outlet: 'left', component: AgariSidebarComponent }]), SidebarModule],
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
