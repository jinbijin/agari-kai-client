import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavigationDrawerComponent } from './navigation-drawer.component';

@Component({
  template: `<nav agariNavigationDrawer>Test</nav>`,
})
class TestHostComponent {}

describe('NavigationDrawerComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({ declarations: [TestHostComponent, NavigationDrawerComponent] });

    await TestBed.compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    const componentElement = fixture.debugElement.query(By.directive(NavigationDrawerComponent));
    expect(componentElement.componentInstance).toBeDefined();
  });

  it('should project content', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    const componentElement = fixture.debugElement.query(By.directive(NavigationDrawerComponent));
    const nativeElement = componentElement.nativeElement as HTMLElement;
    expect(nativeElement.textContent).toContain('Test');
  });
});
