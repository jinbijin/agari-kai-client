import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { DateTime } from 'luxon';
import { toUtcDateTime } from 'src/app/common/utc-date-time';
import { Uuid } from 'src/app/common/uuid';
import { AgariDb } from 'src/app/core/data/schema/agari.db';

@Component({
  selector: 'agari-tournament-edit-title',
  templateUrl: './edit-title.component.html',
  styleUrls: ['./edit-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  standalone: true,
})
export class TournamentEditTitleComponent implements OnInit {
  readonly #db = inject(AgariDb);
  readonly #activatedRoute = inject(ActivatedRoute);
  readonly #changeDetectorRef = inject(ChangeDetectorRef);
  nameControl: FormControl<string | null> | null = null;

  ngOnInit(): void {
    void this.#initializeControl();
  }

  async #initializeControl(): Promise<void> {
    const updates = await this.#db.tournaments
      .orderBy(['_id', '_version'])
      .filter((x) => x._id === this.#activatedRoute.snapshot.paramMap.get('id'))
      .toArray();
    const tournament = updates.reduce((previous, current) => ({ ...previous, ...current }));
    this.nameControl = new FormControl(tournament.name ?? null, { nonNullable: true, updateOn: 'blur' });
    this.nameControl.valueChanges.subscribe((value) => this.#updateValue(tournament._id, value));
    this.#changeDetectorRef.markForCheck();
  }

  async #updateValue(id: Uuid, value: string | null): Promise<void> {
    console.log(id, value);
    await this.#db.tournaments.add({ _id: id, _updatedAt: toUtcDateTime(DateTime.now()), name: value || null });
  }
}
