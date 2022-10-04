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
      await db.transaction('rw', db.revisions, db.entities, async () => {
        const revisionId = await db.revisions.add({ updatedAt: toUtcDateTime(DateTime.now()) });
        await db.entities.add({ id: tournamentId, type: 'tournament', revisionId });
      });
      return tournamentId;
    };
  },
});
