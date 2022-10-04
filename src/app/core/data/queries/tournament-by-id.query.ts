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
          return await db.transaction('r', db.entities, db.data, db.revisions, async () => {
            const name = (
              await db.data
                .orderBy(['id', 'key', 'revisionId'])
                .filter((x) => x.id === value && x.key === 'name')
                .last()
            )?.value as string;
            const firstRevisionId = (await db.entities.filter((x) => x.id === value).first())?.revisionId;
            const latestRevisionId =
              (
                await db.data
                  .orderBy(['id', 'revisionId'])
                  .filter((x) => x.id === value)
                  .last()
              )?.revisionId ?? firstRevisionId;
            const latestRevision = await db.revisions.filter((x) => x.id === latestRevisionId).first();
            return {
              _id: value,
              _version: latestRevisionId,
              _updatedAt: latestRevision!.updatedAt,
              name,
            };
          });
        })
      );
  },
});
