import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnderConstructionComponent } from './modules/under-construction/under-construction.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: UnderConstructionComponent },
  { path: 'scheduler', component: UnderConstructionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), UnderConstructionComponent],
  exports: [RouterModule],
})
export class AgariRoutingModule {}
