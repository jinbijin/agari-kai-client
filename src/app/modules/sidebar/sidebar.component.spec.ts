import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { IconComponent } from '../../design/icon/icon.component';
import { AgariNavigationItem } from '../../routing/tokens/agari-navigation-item.type';
import { AGARI_NAVIGATION_ITEMS } from '../../routing/tokens/agari-navigation-items.token';
import { AgariSidebarComponent } from './sidebar.component';

describe('AgariSidebarComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AgariSidebarComponent],
      providers: [
        {
          provide: AGARI_NAVIGATION_ITEMS,
          useValue: of<AgariNavigationItem[]>([
            { icon: 'home', label: 'Home', routerLink: ['/'], routerLinkActiveOptions: { exact: true } },
            { label: 'Iconless', routerLink: ['/', 'iconless'], routerLinkActiveOptions: { exact: false } },
          ]),
        },
      ],
    });
    TestBed.overrideComponent(AgariSidebarComponent, { remove: { imports: [RouterModule] }, add: { imports: [RouterTestingModule] } });

    await TestBed.compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AgariSidebarComponent);
    expect(fixture.componentInstance).toBeDefined();
  });

  it('should contain the correct number of links', () => {
    const fixture = TestBed.createComponent(AgariSidebarComponent);
    fixture.detectChanges();

    const linkElements = fixture.debugElement.queryAll(By.css('[data-test-id="navigation-link"]'));
    expect(linkElements.length).toBe(2);
  });

  it('should display the correct icons', () => {
    const fixture = TestBed.createComponent(AgariSidebarComponent);
    fixture.detectChanges();

    const linkElements = fixture.debugElement.queryAll(By.css('[data-test-id="navigation-link"]'));
    const iconElements: (IconComponent | undefined)[] = linkElements.map(
      (linkElement) => linkElement.query(By.directive(IconComponent))?.componentInstance
    );
    const icons = iconElements.map((iconElement) => iconElement?.icon);
    expect(icons).toEqual(['home', undefined]);
  });

  it('should display the correct labels', () => {
    const fixture = TestBed.createComponent(AgariSidebarComponent);
    fixture.detectChanges();

    const linkElements = fixture.debugElement.queryAll(By.css('[data-test-id="navigation-link"]'));
    const labelElements: (HTMLElement | undefined)[] = linkElements.map((linkElement) => linkElement.query(By.css('span'))?.nativeElement);
    const labels = labelElements.map((labelElement) => labelElement?.textContent?.trim());
    expect(labels).toEqual(['Home', 'Iconless']);
  });
});
