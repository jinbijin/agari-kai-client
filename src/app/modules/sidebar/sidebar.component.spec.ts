import { TestBed } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { VersionUpdateService } from '../../core/pwa/version-update.service';
import { AGARI_ENVIRONMENT } from '../../core/tokens/environment.token';
import { AgariNavigationItem } from '../../routing/tokens/agari-navigation-item.type';
import { AGARI_NAVIGATION_ITEMS } from '../../routing/tokens/agari-navigation-items.token';
import { AgariSidebarComponent } from './sidebar.component';
import { SidebarModule } from './sidebar.module';

describe('AgariSidebarComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [SidebarModule],
      providers: [
        {
          provide: AGARI_NAVIGATION_ITEMS,
          useValue: of<AgariNavigationItem[]>([
            { icon: 'home', label: 'Home', testId: 'home', routerLink: ['/'], routerLinkActiveOptions: { exact: true } },
            { label: 'Iconless', testId: 'iconless', routerLink: ['/', 'iconless'], routerLinkActiveOptions: { exact: false } },
          ]),
        },
        {
          provide: AGARI_ENVIRONMENT,
          useValue: { production: false, appData: { version: '0.1.0' } },
        },
        {
          provide: VersionUpdateService,
          useClass: VersionUpdateServiceStub,
        },
      ],
    });
    TestBed.overrideModule(SidebarModule, { remove: { imports: [RouterModule] }, add: { imports: [RouterTestingModule] } });

    await TestBed.compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AgariSidebarComponent);
    expect(fixture.componentInstance).toBeDefined();
  });

  it('should contain the correct number of links', () => {
    const fixture = TestBed.createComponent(AgariSidebarComponent);
    fixture.detectChanges();

    const linkElements = fixture.debugElement.queryAll(By.css('[data-test-id^="navigation-link"]'));
    expect(linkElements.length).toBe(2);
  });

  it('should display the correct icons', () => {
    const fixture = TestBed.createComponent(AgariSidebarComponent);
    fixture.detectChanges();

    const linkElements = fixture.debugElement.queryAll(By.css('[data-test-id^="navigation-link"]'));
    const iconElements: HTMLElement[] = linkElements.map((linkElement) => linkElement.query(By.directive(MatIcon))?.nativeElement);
    const icons = iconElements.map((iconElement) => iconElement?.attributes.getNamedItem('fontIcon')?.value);
    expect(icons).toEqual(['home', undefined]);
  });

  it('should display the correct labels', () => {
    const fixture = TestBed.createComponent(AgariSidebarComponent);
    fixture.detectChanges();

    const linkElements = fixture.debugElement.queryAll(By.css('[data-test-id^="navigation-link"]'));
    const labelElements: (HTMLElement | undefined)[] = linkElements.map((linkElement) => linkElement.query(By.css('span'))?.nativeElement);
    const labels = labelElements.map((labelElement) => labelElement?.textContent?.trim());
    expect(labels).toEqual(['Home', 'Iconless']);
  });
});

class VersionUpdateServiceStub {}
