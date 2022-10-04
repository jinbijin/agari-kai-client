import { inject, InjectionToken } from '@angular/core';
import { liveQuery } from 'dexie';
import { Observable } from 'rxjs';
import { promote } from 'src/app/common/dexie';
import { Uuid } from 'src/app/common/uuid';
import { DataModule } from '../data.module';
import { AgariDb } from '../schema/agari.db';
import { Entity } from '../schema/types/entity.type';
import { Tournament } from '../schema/types/tournament.type';

export const TOURNAMENT_BY_ID_QUERY = new InjectionToken<(value: Uuid) => Observable<Entity<Tournament>>>('tournament-by-id-query', {
  providedIn: DataModule,
  factory: () => {
    const db = inject(AgariDb);
    return (value) =>
      promote(
        liveQuery(async () => {
          const tournaments = await db.tournaments
            .orderBy(['_id', '_version'])
            .filter((x) => x._id === value)
            .toArray();
          return tournaments.reduce((previous, current) => ({ ...previous, ...current }));
        })
      );
  },
});
