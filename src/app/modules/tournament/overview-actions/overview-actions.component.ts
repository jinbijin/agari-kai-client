import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { CREATE_TOURNAMENT_COMMAND } from 'src/app/core/data/commands/create-tournament.command';

@Component({
  selector: 'agari-tournament-overview-actions',
  templateUrl: './overview-actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatButtonModule],
  standalone: true,
})
export class TournamentOverviewActionsComponent {
  readonly #router = inject(Router);
  readonly #activatedRoute = inject(ActivatedRoute);
  readonly #createTournamentCommand = inject(CREATE_TOURNAMENT_COMMAND);

  async createTournament(): Promise<void> {
    const tournamentId = await this.#createTournamentCommand();
    await this.#router.navigate([tournamentId, 'edit'], { relativeTo: this.#activatedRoute });
  }
}
