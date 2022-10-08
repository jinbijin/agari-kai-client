import { Routes } from '@angular/router';
import { HomeTitleComponent } from 'src/app/modules/home/title/title.component';
import { UnderConstructionComponent } from 'src/app/modules/under-construction/under-construction.component';
import { mainPageRoute } from '../page-layout/main-page-route';

export const routes: Routes = [
  mainPageRoute([
    { path: '', component: UnderConstructionComponent },
    { path: '', outlet: 'title', component: HomeTitleComponent },
  ]),
];
