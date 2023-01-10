import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { Subscription } from 'rxjs';
import { UPDATE_TOURNAMENT_NAME_COMMAND } from 'src/app/core/data/commands/update-tournament-name.command';
import { tournamentFromRouteParams } from 'src/app/routing/tournaments/tournament-from-route-params';
import { createTournamentNameControl } from './tournament-name-control';

@Component({
  selector: 'agari-tournament-edit-title',
  templateUrl: './edit-title.component.html',
  styleUrls: ['./edit-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  standalone: true,
})
export class TournamentEditTitleComponent implements OnInit, OnDestroy {
  readonly #subscriptions = new Subscription();
  readonly #tournamentId = tournamentFromRouteParams()?._id;
  readonly #updateTournamentNameCommand = inject(UPDATE_TOURNAMENT_NAME_COMMAND);
  nameControl = createTournamentNameControl();

  ngOnInit(): void {
    this.#subscriptions.add(
      this.nameControl.valueChanges.subscribe((value) => {
        if (this.#tournamentId) {
          this.#updateTournamentNameCommand(this.#tournamentId, value || null);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.#subscriptions.unsubscribe();
  }
}
