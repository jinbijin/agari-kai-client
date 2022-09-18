import { TestBed } from '@angular/core/testing';
import { UnderConstructionComponent } from './under-construction.component';

describe('UnderConstructionComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({ imports: [UnderConstructionComponent] });

    await TestBed.compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(UnderConstructionComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeDefined();
  });
});
