import { TestBed } from '@angular/core/testing';
import { NavigationHeaderComponent } from './navigation-header.component';

describe('NavigationHeaderComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({ declarations: [NavigationHeaderComponent] });

    await TestBed.compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NavigationHeaderComponent);
    expect(fixture.componentInstance).toBeDefined();
  });
});
