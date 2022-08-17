import { TestBed } from '@angular/core/testing';
import { AgariComponent } from './agari.component';

describe('AgariComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AgariComponent],
    });

    await TestBed.compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AgariComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'agari-kai-client'`, () => {
    const fixture = TestBed.createComponent(AgariComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('agari-kai-client');
  });
});
