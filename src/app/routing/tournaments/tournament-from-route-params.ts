import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tournament } from 'src/app/core/data/queries/tournament-by-id.query';

export function tournamentFromRouteParams(): Tournament | undefined {
  const activatedRoute = inject(ActivatedRoute);
  return activatedRoute.snapshot.data['tournament'];
}
