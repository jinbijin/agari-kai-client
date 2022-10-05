import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Subscription } from 'rxjs';
import { UPDATE_TOURNAMENT_NAME_COMMAND } from 'src/app/core/data/commands/update-tournament-name.command';
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
  readonly #updateTournamentNameCommand = inject(UPDATE_TOURNAMENT_NAME_COMMAND);
  tournamentControl = createTournamentNameControl();

  ngOnInit(): void {
    this.#subscriptions.add(
      this.tournamentControl.valueChanges.subscribe((value) => {
        if (value.id) {
          this.#updateTournamentNameCommand(value.id, value.name || null);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.#subscriptions.unsubscribe();
  }
}
