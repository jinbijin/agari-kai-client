import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DateTime } from 'luxon';
import { toUtcDateTime } from 'src/app/common/utc-date-time';
import { uuid } from 'src/app/common/uuid';
import { AgariDb } from 'src/app/core/data/schema/agari.db';

@Component({
  selector: 'agari-tournament-overview-actions',
  templateUrl: './overview-actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatButtonModule],
  standalone: true,
})
export class TournamentOverviewActionsComponent {
  readonly #db = inject(AgariDb);

  async createTournament(): Promise<void> {
    const tournamentId = uuid();
    await this.#db.tournaments.add({ _id: tournamentId, _updatedAt: toUtcDateTime(DateTime.now()) });
    // TODO navigate
  }
}
