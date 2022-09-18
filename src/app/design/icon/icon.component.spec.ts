import { TestBed } from '@angular/core/testing';
import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({ imports: [IconComponent] });

    await TestBed.compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(IconComponent);
    expect(fixture.componentInstance).toBeDefined();
  });

  it('should display icon', () => {
    const fixture = TestBed.createComponent(IconComponent);
    fixture.componentInstance.icon = 'home';
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent?.trim()).toBe('home');
  });

  it('should hide content from screen readers', () => {
    const fixture = TestBed.createComponent(IconComponent);
    fixture.componentInstance.icon = 'home';
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.attributes.getNamedItem('aria-hidden')?.value).toBe('true');
  });
});
