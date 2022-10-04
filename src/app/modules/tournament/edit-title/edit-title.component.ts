import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { isUuid } from 'src/app/common/uuid';
import { UPDATE_TOURNAMENT_NAME_COMMAND } from 'src/app/core/data/commands/update-tournament-name.command';
import { TOURNAMENT_BY_ID_QUERY } from 'src/app/core/data/queries/tournament-by-id.query';
import { Entity } from 'src/app/core/data/schema/types/entity.type';
import { Tournament } from 'src/app/core/data/schema/types/tournament.type';

@Component({
  selector: 'agari-tournament-edit-title',
  templateUrl: './edit-title.component.html',
  styleUrls: ['./edit-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  standalone: true,
})
export class TournamentEditTitleComponent implements OnInit {
  readonly #activatedRoute = inject(ActivatedRoute);
  readonly #changeDetectorRef = inject(ChangeDetectorRef);
  readonly #tournamentByIdQuery = inject(TOURNAMENT_BY_ID_QUERY);
  readonly #updateTournamentNameCommand = inject(UPDATE_TOURNAMENT_NAME_COMMAND);
  nameControl: FormControl<string | null> | null = null;

  ngOnInit(): void {
    const id = this.#activatedRoute.snapshot.paramMap.get('id');
    if (!id || !isUuid(id)) {
      throw new Error('Invalid id.');
    }
    this.#tournamentByIdQuery(id)
      .pipe(take(1))
      .subscribe((tournament) => this.#initializeControl(tournament));
  }

  #initializeControl(tournament: Entity<Tournament>): void {
    this.nameControl = new FormControl(tournament.name ?? null, { nonNullable: true, updateOn: 'blur' });
    this.nameControl.valueChanges.subscribe((value) => this.#updateTournamentNameCommand(tournament._id, value || null));
    this.#changeDetectorRef.markForCheck();
  }
}
