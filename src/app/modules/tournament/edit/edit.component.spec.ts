import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TournamentEditComponent } from './edit.component';

describe('TournamentEditComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({ imports: [TournamentEditComponent] }).overrideComponent(TournamentEditComponent, {
      remove: { imports: [RouterModule] },
      add: { imports: [RouterTestingModule] },
    });

    await TestBed.compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TournamentEditComponent);
    expect(fixture.componentInstance).toBeDefined();
  });
});
