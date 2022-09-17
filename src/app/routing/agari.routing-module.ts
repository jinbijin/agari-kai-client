import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { UnderConstructionComponent } from '../modules/under-construction/under-construction.component';
import { AgariTitleRenderer } from './agari.title-renderer';
import { AgariTitleStrategy } from './agari.title-strategy';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: UnderConstructionComponent },
  { path: 'tournaments', title: 'Tournaments', component: UnderConstructionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), UnderConstructionComponent],
  exports: [RouterModule],
  providers: [AgariTitleRenderer, { provide: TitleStrategy, useClass: AgariTitleStrategy }],
})
export class AgariRoutingModule {}
