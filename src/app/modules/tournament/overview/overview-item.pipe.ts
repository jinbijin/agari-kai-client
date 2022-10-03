import { inject, Pipe, PipeTransform } from '@angular/core';
import { IndexableTypePart, liveQuery, Observable } from 'dexie';
import { AgariDb } from 'src/app/core/data/schema/agari.db';
import { Entity } from 'src/app/core/data/schema/types/entity.type';
import { Tournament } from 'src/app/core/data/schema/types/tournament.type';

@Pipe({
  name: 'overviewItem',
  standalone: true,
})
export class TournamentOverviewItemPipe implements PipeTransform {
  readonly #db = inject(AgariDb);

  transform(value: IndexableTypePart): Observable<Entity<Tournament>> {
    return liveQuery(async () => {
      const tournaments = await this.#db.tournaments
        .orderBy(['_id', '_version'])
        .filter((x) => x._id === value)
        .toArray();
      return tournaments.reduce((previous, current) => ({ ...previous, ...current }));
    });
  }
}
