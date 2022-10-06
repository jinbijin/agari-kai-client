import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TournamentEditComponent } from './edit.component';

describe('TournamentEditComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [TournamentEditComponent],
      providers: [ActivatedRouteStub, { provide: ActivatedRoute, useExisting: ActivatedRouteStub }],
    }).overrideComponent(TournamentEditComponent, {
      remove: { imports: [RouterModule] },
      add: { imports: [RouterTestingModule] },
    });

    await TestBed.compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TournamentEditComponent);
    expect(fixture.componentInstance).toBeDefined();
  });

  it('should display error message if tournament is not found', () => {
    const fixture = TestBed.createComponent(TournamentEditComponent);
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('[data-test-id="tournament-not-found"]'));
    expect(element?.nativeElement).toBeDefined();
  });

  it('should not display error message if tournament is found', () => {
    const activatedRouteStub = TestBed.inject(ActivatedRouteStub);
    activatedRouteStub.tournament = {};

    const fixture = TestBed.createComponent(TournamentEditComponent);
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('[data-test-id="tournament-not-found"]'));
    expect(element?.nativeElement).toBeDefined();
  });
});

@Injectable()
class ActivatedRouteStub {
  tournament: object | undefined = undefined;

  get snapshot() {
    return { data: { tournament: this.tournament } };
  }
}
