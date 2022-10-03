import { Routes } from '@angular/router';
import { TournamentOverviewActionsComponent } from 'src/app/modules/tournament/overview-actions/overview-actions.component';
import { TournamentOverviewComponent } from 'src/app/modules/tournament/overview/overview.component';
import { mainPageRoute } from '../page-layout/main-page-route';

export const routes: Routes = [
  mainPageRoute([
    { path: '', component: TournamentOverviewComponent },
    { path: '', outlet: 'actions', component: TournamentOverviewActionsComponent },
  ]),
];
