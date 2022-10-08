import { TestBed } from '@angular/core/testing';
import { TournamentOverviewComponent } from './overview.component';
import { InjectionToken, Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TOURNAMENT_BY_ID_QUERY } from '../../../core/data/queries/tournament-by-id.query';
import { Uuid } from '../../../common/uuid';
import { TOURNAMENT_IDS_QUERY } from '../../../core/data/queries/tournament-ids.query';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DateTimeToRelativePipe } from 'luxon-angular';

describe('TournamentOverviewComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [TournamentOverviewComponent],
      providers: [
        { provide: TOURNAMENT_BY_ID_QUERY, useFactory: (source: Observable<object>) => (value: Uuid) => source, deps: [queryResultMock] },
        { provide: TOURNAMENT_IDS_QUERY, useValue: of(['cb0d03d8-1815-4c3f-918d-a57a3fd999e5']) },
      ],
    });

    TestBed.overrideComponent(TournamentOverviewComponent, {
      remove: { imports: [RouterModule] },
      add: { imports: [RouterTestingModule, DateTimeToRelativeMockPipe] },
    });
    TestBed.overridePipe(DateTimeToRelativePipe, { set: { name: 'mockedAway' } });

    await TestBed.compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TournamentOverviewComponent);
    expect(fixture.componentInstance).toBeDefined();
  });

  it('should display tournament name', () => {
    const fixture = TestBed.createComponent(TournamentOverviewComponent);
    fixture.detectChanges();

    const element: HTMLElement = fixture.debugElement.query(By.css('[data-test-id="tournament-name"]'))?.nativeElement;
    expect(element.textContent?.trim()).toBe('Tournament 1');
  });

  it('should display time of last modification', () => {
    const fixture = TestBed.createComponent(TournamentOverviewComponent);
    fixture.detectChanges();

    const element: HTMLElement = fixture.debugElement.query(By.css('[data-test-id="tournament-last-modified"]'))?.nativeElement;
    expect(element.textContent?.trim()).toBe('Last modified');
  });
});

const queryResultMock = new InjectionToken('query-result-mock', {
  providedIn: 'root',
  factory: () => of({ name: 'Tournament 1', _updatedAt: '2022-01-01T00:00:00.000Z' }),
});

@Pipe({
  name: 'dateTimeToRelative',
  standalone: true,
})
class DateTimeToRelativeMockPipe implements PipeTransform {
  transform(value: any): any {
    return '';
  }
}
