import { Injectable, InjectionToken } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Uuid } from '../../../common/uuid';
import { UPDATE_TOURNAMENT_NAME_COMMAND } from '../../../core/data/commands/update-tournament-name.command';
import { TournamentEditTitleComponent } from './edit-title.component';

describe('TournamentEditTitleComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [TournamentEditTitleComponent, NoopAnimationsModule],
      providers: [{ provide: UPDATE_TOURNAMENT_NAME_COMMAND, useExisting: updateTournamentNameCommandMock }, ActivatedRouteStub],
    });

    TestBed.overrideComponent(TournamentEditTitleComponent, {
      remove: { imports: [RouterModule] },
      add: { imports: [RouterTestingModule] },
    });

    TestBed.overrideProvider(ActivatedRoute, { useFactory: (stub: ActivatedRouteStub) => stub, deps: [ActivatedRouteStub] });

    await TestBed.compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TournamentEditTitleComponent);
    expect(fixture.componentInstance).toBeDefined();
  });

  it('should save name on entering', () => {
    const activatedRouteStub = TestBed.inject(ActivatedRouteStub);
    activatedRouteStub.tournament = { _id: '0f660317-a9aa-4d78-997c-ef2efc3f6a79' };

    const fixture = TestBed.createComponent(TournamentEditTitleComponent);
    fixture.detectChanges();

    const component = fixture.componentInstance;
    component.nameControl.setValue('Name');

    const mock = TestBed.inject(updateTournamentNameCommandMock);
    expect(mock).toBeCalledWith('0f660317-a9aa-4d78-997c-ef2efc3f6a79', 'Name');
  });

  it('should empty name on entering an empty value', () => {
    const activatedRouteStub = TestBed.inject(ActivatedRouteStub);
    activatedRouteStub.tournament = { _id: '0f660317-a9aa-4d78-997c-ef2efc3f6a79' };

    const fixture = TestBed.createComponent(TournamentEditTitleComponent);
    fixture.detectChanges();

    const component = fixture.componentInstance;
    component.nameControl.setValue('');

    const mock = TestBed.inject(updateTournamentNameCommandMock);
    expect(mock).toBeCalledWith('0f660317-a9aa-4d78-997c-ef2efc3f6a79', null);
  });
});

const updateTournamentNameCommandMock = new InjectionToken('update-tournament-name-command-mock', {
  providedIn: 'root',
  factory: () => jest.fn<Promise<void>, [Uuid, string | null]>(() => Promise.resolve()),
});

@Injectable()
class ActivatedRouteStub {
  tournament: object | undefined = undefined;

  get snapshot() {
    return { data: { tournament: this.tournament } };
  }
}
