import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tournament } from '../../core/data/schema/types/tournament.type';
import { DbRecord } from '../../core/data/schema/types/db-record.type';

export function tournamentFromRouteParams(): DbRecord<Tournament> | undefined {
  const activatedRoute = inject(ActivatedRoute);
  return activatedRoute.snapshot.data['tournament'];
}
