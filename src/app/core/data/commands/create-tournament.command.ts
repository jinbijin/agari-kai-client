import { inject, InjectionToken } from '@angular/core';
import { DateTime } from 'luxon';
import { toUtcDateTime } from 'src/app/common/utc-date-time';
import { uuid, Uuid } from 'src/app/common/uuid';
import { DataModule } from '../data.module';
import { AgariDb } from '../schema/agari.db';

export const CREATE_TOURNAMENT_COMMAND = new InjectionToken<() => Promise<Uuid>>('create-tournament-command', {
  providedIn: DataModule,
  factory: () => {
    const db = inject(AgariDb);
    return async () => {
      const tournamentId = uuid();
      await db.tournaments.add({ _id: tournamentId, _updatedAt: toUtcDateTime(DateTime.now()) });
      return tournamentId;
    };
  },
});
