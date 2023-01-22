/* istanbul ignore file */
import { inject, InjectionToken } from '@angular/core';
import { liveQuery } from 'dexie';
import { Observable } from 'rxjs';
import { promote } from 'src/app/common/dexie';
import { Uuid } from 'src/app/common/uuid';
import { DataModule } from '../data.module';
import { AgariDb } from '../schema/agari.db';
import { DbRecord } from '../schema/types/db-record.type';
import { Tournament } from '../schema/types/tournament.type';

export const TOURNAMENT_BY_ID_QUERY = new InjectionToken<(value: Uuid) => Observable<DbRecord<Tournament>>>('tournament-by-id-query', {
  providedIn: DataModule,
  factory: () => {
    const db = inject(AgariDb);
    return (value) =>
      promote(
        liveQuery(async () =>
          db.tournaments
            .orderBy('_id')
            .filter((x) => x._id === value)
            .first()
            .then((x) => x!)
        )
      );
  },
});
