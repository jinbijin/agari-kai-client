import { TestBed } from '@angular/core/testing';
import { HomeTitleComponent } from './title.component';

describe('HomeTitleComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HomeTitleComponent],
    });
    await TestBed.compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HomeTitleComponent);
    expect(fixture.componentInstance).toBeDefined();
  });
});
