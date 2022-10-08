import { TestBed } from '@angular/core/testing';
import { TournamentOverviewActionsComponent } from './overview-actions.component';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { InjectionToken } from '@angular/core';
import { CREATE_TOURNAMENT_COMMAND } from '../../../core/data/commands/create-tournament.command';
import { By } from '@angular/platform-browser';

describe('TournamentOverviewActionsComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [TournamentOverviewActionsComponent],
      providers: [{ provide: CREATE_TOURNAMENT_COMMAND, useExisting: createTournamentCommandMock }],
    });
    TestBed.overrideComponent(TournamentOverviewActionsComponent, {
      remove: { imports: [RouterModule] },
      add: { imports: [RouterTestingModule] },
    });

    await TestBed.compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TournamentOverviewActionsComponent);
    expect(fixture.componentInstance).toBeDefined();
  });

  it('should create a tournament', () => {
    const fixture = TestBed.createComponent(TournamentOverviewActionsComponent);
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.debugElement.query(By.css('[data-test-id="create-tournament"]'))?.nativeElement;
    button.click();
    fixture.detectChanges();

    const mock = TestBed.inject(createTournamentCommandMock);
    expect(mock).toBeCalledTimes(1);
  });
});

const createTournamentCommandMock = new InjectionToken('create-tournament-command-mock', {
  providedIn: 'root',
  factory: () => {
    return jest.fn<Promise<void>, []>();
  },
});
