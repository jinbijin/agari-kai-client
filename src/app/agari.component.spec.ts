import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AgariComponent } from './agari.component';

describe('AgariComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AgariComponent],
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
