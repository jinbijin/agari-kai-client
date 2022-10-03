import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
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
  readonly #router = inject(Router);
  readonly #activatedRoute = inject(ActivatedRoute);

  async createTournament(): Promise<void> {
    const tournamentId = uuid();
    await this.#db.tournaments.add({ _id: tournamentId, _updatedAt: toUtcDateTime(DateTime.now()) });
    await this.#router.navigate([tournamentId, 'edit'], { relativeTo: this.#activatedRoute });
  }
}
