import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { LuxonModule } from 'luxon-angular';
import { TOURNAMENT_IDS_QUERY } from 'src/app/core/data/queries/tournament-ids.query';
import { TournamentOverviewItemPipe } from './overview-item.pipe';

@Component({
  selector: 'agari-tournament-overview',
  templateUrl: './overview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, MatIconModule, MatListModule, LuxonModule, TournamentOverviewItemPipe],
  standalone: true,
})
export class TournamentOverviewComponent {
  readonly tournamentIds$ = inject(TOURNAMENT_IDS_QUERY);
}
