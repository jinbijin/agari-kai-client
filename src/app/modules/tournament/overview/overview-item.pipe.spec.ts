import { TestBed } from '@angular/core/testing';
import { TournamentOverviewItemPipe } from './overview-item.pipe';
import { EnvironmentInjector, InjectionToken } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TOURNAMENT_BY_ID_QUERY } from '../../../core/data/queries/tournament-by-id.query';
import { parseUuid, Uuid } from '../../../common/uuid';

describe('TournamentOverviewItemPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TOURNAMENT_BY_ID_QUERY, useFactory: (source: Observable<object>) => (value: Uuid) => source, deps: [queryResultMock] },
      ],
    });
  });

  it('should create', () => {
    const environmentInjector = TestBed.inject(EnvironmentInjector);
    const pipe = environmentInjector.runInContext(() => new TournamentOverviewItemPipe());
    expect(pipe).toBeDefined();
  });

  it('should return query result', () => {
    const environmentInjector = TestBed.inject(EnvironmentInjector);
    const pipe = environmentInjector.runInContext(() => new TournamentOverviewItemPipe());
    const mock = TestBed.inject(queryResultMock);

    const result = pipe.transform(parseUuid('d377e463-f1bd-4157-bbf0-15fcae0fac29'));
    expect(result).toBe(mock);
  });
});

const queryResultMock = new InjectionToken('query-result-mock', {
  providedIn: 'root',
  factory: () => of({}),
});
