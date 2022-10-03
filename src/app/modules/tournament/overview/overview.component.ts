import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { liveQuery } from 'dexie';
import { LuxonModule } from 'luxon-angular';
import { AgariDb } from 'src/app/core/data/schema/agari.db';
import { TournamentOverviewItemPipe } from './overview-item.pipe';

@Component({
  selector: 'agari-tournament-overview',
  templateUrl: './overview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, MatIconModule, MatListModule, LuxonModule, TournamentOverviewItemPipe],
  standalone: true,
})
export class TournamentOverviewComponent {
  readonly #db = inject(AgariDb);

  readonly tournamentIds$ = liveQuery(() => this.#db.tournaments.orderBy('_id').uniqueKeys());
}
