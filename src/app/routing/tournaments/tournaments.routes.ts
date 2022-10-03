import { Routes } from '@angular/router';
import { TournamentEditTitleComponent } from 'src/app/modules/tournament/edit-title/edit-title.component';
import { TournamentOverviewActionsComponent } from 'src/app/modules/tournament/overview-actions/overview-actions.component';
import { TournamentOverviewComponent } from 'src/app/modules/tournament/overview/overview.component';
import { mainPageRoute } from '../page-layout/main-page-route';

export const routes: Routes = [
  {
    path: ':id/edit',
    children: [mainPageRoute([{ path: '', outlet: 'title', component: TournamentEditTitleComponent }])],
  },
  mainPageRoute([
    { path: '', component: TournamentOverviewComponent },
    { path: '', outlet: 'actions', component: TournamentOverviewActionsComponent },
  ]),
];
