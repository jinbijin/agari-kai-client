import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IconComponent } from '../../icon/icon.component';
import { NavigationLinkComponent } from './navigation-link.component';

@Component({
  template: `<a agariNavigationLink><agari-icon icon="testIcon"></agari-icon>Test</a>`,
})
class TestHostComponent {}

describe('NavigationLinkComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, NavigationLinkComponent],
      imports: [IconComponent],
    });

    await TestBed.compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    const componentElement = fixture.debugElement.query(By.directive(NavigationLinkComponent));
    expect(componentElement.componentInstance).toBeDefined();
  });

  it('should project icon', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const iconElement = fixture.debugElement.query(By.directive(IconComponent));
    const nativeElement = iconElement.nativeElement as HTMLElement;
    expect(nativeElement.textContent?.trim()).toBe('testIcon');
  });

  it('should project content', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const spanElement = fixture.debugElement.query(By.css('span'));
    const nativeElement = spanElement.nativeElement as HTMLElement;
    expect(nativeElement.textContent).toBe('Test');
  });
});
