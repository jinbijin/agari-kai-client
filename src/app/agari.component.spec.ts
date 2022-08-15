import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AgariComponent } from './agari.component';

describe('AgariComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AgariComponent
      ],
    }).compileComponents();
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
