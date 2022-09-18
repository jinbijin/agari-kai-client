import { TestBed } from '@angular/core/testing';
import { NavigationContentComponent } from './navigation-content.component';

describe('NavigationContentComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({ declarations: [NavigationContentComponent] });

    await TestBed.compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NavigationContentComponent);
    expect(fixture.componentInstance).toBeDefined();
  });
});
