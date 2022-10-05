import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of, take, timeout } from 'rxjs';
import { isUuid } from 'src/app/common/uuid';
import { DataModule } from '../data.module';
import { Tournament, TOURNAMENT_BY_ID_QUERY } from '../queries/tournament-by-id.query';

@Injectable({ providedIn: DataModule })
export class TournamentResolver implements Resolve<Tournament | undefined> {
  readonly #tournamentByIdQuery = inject(TOURNAMENT_BY_ID_QUERY);

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tournament | undefined> {
    const tournamentId = route.paramMap.get('tournamentId');
    if (!tournamentId || !isUuid(tournamentId)) {
      return of(undefined);
    }

    return this.#tournamentByIdQuery(tournamentId).pipe(
      take(1),
      timeout({ first: 1_000 }),
      catchError((_) => of(undefined))
    );
  }
}
