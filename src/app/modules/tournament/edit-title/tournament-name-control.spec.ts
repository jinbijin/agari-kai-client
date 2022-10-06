import { EnvironmentInjector, Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { createTournamentNameControl } from './tournament-name-control';

describe('createTournamentNameControl', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ActivatedRouteStub, { provide: ActivatedRoute, useExisting: ActivatedRouteStub }] });
  });

  it('should create', () => {
    expect(getControl()).toBeDefined();
  });

  it('should be disabled if no tournament is found', () => {
    expect(getControl().disabled).toBe(true);
  });

  it('should have empty value if no tournament is found', () => {
    expect(getControl().value).toBe(null);
  });

  it('should be enabled if a tournament is found', () => {
    setRouteTournament({ name: null });

    expect(getControl().disabled).toBe(false);
  });

  it('should have empty value if the tournament has no name', () => {
    setRouteTournament({ name: null });

    expect(getControl().value).toBe(null);
  });

  it('should have non-empty value if the tournament has a name', () => {
    setRouteTournament({ name: 'Tournament 1' });

    expect(getControl().value).toBe('Tournament 1');
  });
});

function setRouteTournament(tournament: object): void {
  TestBed.inject(ActivatedRouteStub).tournament = tournament;
}

function getControl(): FormControl<string | null> {
  const injector = TestBed.inject(EnvironmentInjector);
  return injector.runInContext(createTournamentNameControl);
}

@Injectable()
class ActivatedRouteStub {
  tournament: object | undefined = undefined;

  get snapshot() {
    return { data: { tournament: this.tournament } };
  }
}
