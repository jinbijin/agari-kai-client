/* istanbul ignore file */
import { inject, InjectionToken } from '@angular/core';
import { liveQuery } from 'dexie';
import { Observable } from 'rxjs';
import { promote } from 'src/app/common/dexie';
import { Uuid } from 'src/app/common/uuid';
import { DataModule } from '../data.module';
import { AgariDb } from '../schema/agari.db';

export const TOURNAMENT_IDS_QUERY = new InjectionToken<Observable<Uuid[]>>('tournament-ids-query', {
  providedIn: DataModule,
  factory: () => {
    const db = inject(AgariDb);
    return promote(
      liveQuery(() =>
        db.entities
          .orderBy('type')
          .filter((x) => x.type === 'tournament')
          .primaryKeys()
      )
    );
  },
});
