import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { tournamentFromRouteParams } from 'src/app/routing/tournaments/tournament-from-route-params';

@Component({
  selector: 'agari-tournament-edit',
  templateUrl: './edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, MatTabsModule],
  standalone: true,
})
export class TournamentEditComponent {
  readonly tournament = tournamentFromRouteParams();
}
