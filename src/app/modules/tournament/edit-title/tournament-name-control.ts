import { inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tournament } from 'src/app/core/data/queries/tournament-by-id.query';

export function createTournamentNameControl() {
  const activatedRoute = inject(ActivatedRoute);
  const tournament: Tournament | undefined = activatedRoute.snapshot.data['tournament'];
  return new FormGroup({
    id: new FormControl({ value: tournament?._id, disabled: !tournament }, { nonNullable: true }),
    name: new FormControl({ value: tournament?.name ?? null, disabled: !tournament }, { nonNullable: true, updateOn: 'blur' }),
  });
}
