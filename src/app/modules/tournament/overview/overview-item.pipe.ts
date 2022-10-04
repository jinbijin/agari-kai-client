import { inject, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Uuid } from 'src/app/common/uuid';
import { TOURNAMENT_BY_ID_QUERY } from 'src/app/core/data/queries/tournament-by-id.query';
import { Entity } from 'src/app/core/data/schema/types/entity.type';
import { Tournament } from 'src/app/core/data/schema/types/tournament.type';

@Pipe({
  name: 'overviewItem',
  standalone: true,
})
export class TournamentOverviewItemPipe implements PipeTransform {
  readonly #query = inject(TOURNAMENT_BY_ID_QUERY);

  transform(value: Uuid): Observable<Entity<Tournament>> {
    return this.#query(value);
  }
}
