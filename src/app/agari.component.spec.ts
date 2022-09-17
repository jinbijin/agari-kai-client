import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AgariComponent } from './agari.component';
import { AGARI_NAVIGATION_ITEMS } from './routing/tokens/agari-navigation-items.token';

describe('AgariComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AgariComponent],
      providers: [{ provide: AGARI_NAVIGATION_ITEMS, useValue: of([]) }],
    });

    TestBed.overrideComponent(AgariComponent, { remove: { imports: [RouterModule] }, add: { imports: [RouterTestingModule] } });

    await TestBed.compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AgariComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
