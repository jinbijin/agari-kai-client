import { inject, InjectionToken } from '@angular/core';
import { DateTime } from 'luxon';
import { toUtcDateTime } from 'src/app/common/utc-date-time';
import { Uuid } from 'src/app/common/uuid';
import { DataModule } from '../data.module';
import { AgariDb } from '../schema/agari.db';

export const UPDATE_TOURNAMENT_NAME_COMMAND = new InjectionToken<(id: Uuid, value: string | null) => Promise<void>>(
  'update-tournament-name-command',
  {
    providedIn: DataModule,
    factory: () => {
      const db = inject(AgariDb);
      return async (id: Uuid, value: string | null) => {
        await db.tournaments.add({ _id: id, _updatedAt: toUtcDateTime(DateTime.now()), name: value });
      };
    },
  }
);
