import { Routes } from '@angular/router';
import { UnderConstructionComponent } from 'src/app/modules/under-construction/under-construction.component';
import { mainPageRoute } from '../page-layout/main-page-route';

export const routes: Routes = [mainPageRoute([{ path: '', component: UnderConstructionComponent }])];
