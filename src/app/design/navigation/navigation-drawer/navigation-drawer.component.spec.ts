import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavigationContentComponent } from '../navigation-content/navigation-content.component';
import { NavigationHeaderComponent } from '../navigation-header/navigation-header.component';
import { NavigationDrawerComponent } from './navigation-drawer.component';

@Component({
  template: `<nav agariNavigationDrawer>
    <agari-navigation-header><h1>Header</h1></agari-navigation-header>
    <agari-navigation-content>Test</agari-navigation-content>
  </nav>`,
})
class TestHostComponent {}

describe('NavigationDrawerComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, NavigationDrawerComponent, NavigationContentComponent, NavigationHeaderComponent],
    });

    await TestBed.compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    const componentElement = fixture.debugElement.query(By.directive(NavigationDrawerComponent));
    expect(componentElement.componentInstance).toBeDefined();
  });

  it('should project header', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    const componentElement = fixture.debugElement.query(By.directive(NavigationHeaderComponent));
    const nativeElement = componentElement.nativeElement as HTMLElement;
    expect(nativeElement.textContent).toContain('Header');
  });

  it('should project content', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    const componentElement = fixture.debugElement.query(By.directive(NavigationContentComponent));
    const nativeElement = componentElement.nativeElement as HTMLElement;
    expect(nativeElement.textContent).toContain('Test');
  });
});
