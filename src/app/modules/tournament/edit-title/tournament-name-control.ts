import { FormControl } from '@angular/forms';
import { tournamentFromRouteParams } from 'src/app/routing/tournaments/tournament-from-route-params';

export function createTournamentNameControl(): FormControl<string | null> {
  const tournament = tournamentFromRouteParams();
  return new FormControl({ value: tournament?.name ?? null, disabled: !tournament }, { nonNullable: true, updateOn: 'blur' });
}
