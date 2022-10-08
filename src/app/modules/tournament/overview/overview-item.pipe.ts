import { inject, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Uuid } from 'src/app/common/uuid';
import { Tournament, TOURNAMENT_BY_ID_QUERY } from 'src/app/core/data/queries/tournament-by-id.query';

@Pipe({
  name: 'overviewItem',
  standalone: true,
})
export class TournamentOverviewItemPipe implements PipeTransform {
  readonly #query = inject(TOURNAMENT_BY_ID_QUERY);

  transform(value: Uuid): Observable<Tournament> {
    return this.#query(value);
  }
}
