import { Routes } from '@angular/router';
import { TournamentEditTitleComponent } from 'src/app/modules/tournament/edit-title/edit-title.component';
import { TournamentEditComponent } from 'src/app/modules/tournament/edit/edit.component';
import { TournamentOverviewActionsComponent } from 'src/app/modules/tournament/overview-actions/overview-actions.component';
import { TournamentOverviewComponent } from 'src/app/modules/tournament/overview/overview.component';
import { UnderConstructionComponent } from 'src/app/modules/under-construction/under-construction.component';
import { mainPageRoute } from '../page-layout/main-page-route';

export const routes: Routes = [
  {
    path: ':id/edit',
    children: [
      mainPageRoute([
        {
          path: '',
          component: TournamentEditComponent,
          children: [
            { path: '', redirectTo: 'format', pathMatch: 'full' },
            { path: 'format', component: UnderConstructionComponent },
            { path: 'schedule', component: UnderConstructionComponent },
            { path: 'participants', component: UnderConstructionComponent },
          ],
        },
        {
          path: '',
          outlet: 'title',
          component: TournamentEditTitleComponent,
        },
      ]),
    ],
    data: { parentUrl: '/tournaments' },
  },
  mainPageRoute([
    { path: '', component: TournamentOverviewComponent },
    { path: '', outlet: 'actions', component: TournamentOverviewActionsComponent },
  ]),
];
