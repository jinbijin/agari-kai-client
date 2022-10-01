import { Routes } from '@angular/router';
import { TournamentOverviewActionsComponent } from 'src/app/modules/tournament/overview-actions/overview-actions.component';
import { UnderConstructionComponent } from 'src/app/modules/under-construction/under-construction.component';
import { mainPageRoute } from '../page-layout/main-page-route';

export const routes: Routes = [
  mainPageRoute([
    { path: '', component: UnderConstructionComponent },
    { path: '', outlet: 'actions', component: TournamentOverviewActionsComponent },
  ]),
];
