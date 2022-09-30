import { TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AgariComponent } from './agari.component';

describe('AgariComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [AgariComponent],
      imports: [NoopAnimationsModule, MatSidenavModule, RouterTestingModule],
    });

    await TestBed.compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AgariComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
