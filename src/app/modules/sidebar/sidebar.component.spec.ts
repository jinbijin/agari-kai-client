import { TestBed } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { IncomingVersion } from '../../core/pwa/incoming-version.type';
import { VersionStatus } from '../../core/pwa/version-status.type';
import { VersionUpdateService } from '../../core/pwa/version-update.service';
import { DELAY_AND_HOLD_CONFIG } from '../../core/tokens/delay-and-hold-config.token';
import { AGARI_ENVIRONMENT } from '../../core/tokens/environment.token';
import { WINDOW_LOCATION } from '../../core/tokens/location.token';
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
        VersionUpdateServiceStub,
        LocationStub,
        {
          provide: VersionUpdateService,
          useExisting: VersionUpdateServiceStub,
        },
        {
          provide: WINDOW_LOCATION,
          useExisting: LocationStub,
        },
        {
          provide: DELAY_AND_HOLD_CONFIG,
          useValue: { delayFor: 0, holdFor: 0 },
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

  it('should not display a chip if there is no incoming version', () => {
    const fixture = TestBed.createComponent(AgariSidebarComponent);
    fixture.detectChanges();

    const matChip = fixture.debugElement.query(By.css('[data-test-id="update-chip"]'))?.nativeElement;
    expect(matChip).toBeFalsy();
  });

  it('should display a chip with version if an incoming version is downloading', async () => {
    const stub = TestBed.inject(VersionUpdateServiceStub);
    stub.incomingVersion = { status: VersionStatus.Loading, version: '0.0.0' };

    const fixture = TestBed.createComponent(AgariSidebarComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const matChip: HTMLElement = fixture.debugElement.query(By.css('[data-test-id="update-chip"]'))?.nativeElement;
    expect(matChip).toBeDefined();
    expect(matChip.textContent?.trim()).toBe('0.0.0');
  });

  it('should display a chip with version if an incoming version is ready', () => {
    const stub = TestBed.inject(VersionUpdateServiceStub);
    stub.incomingVersion = { status: VersionStatus.Ready, version: '0.0.0' };

    const fixture = TestBed.createComponent(AgariSidebarComponent);
    fixture.detectChanges();

    const matChip: HTMLElement = fixture.debugElement.query(By.css('[data-test-id="update-chip"]'))?.nativeElement;
    expect(matChip).toBeDefined();
    expect(matChip.textContent?.trim()).toBe('0.0.0');
  });

  it('should display a chip with version if an incoming version has failed to download', () => {
    const stub = TestBed.inject(VersionUpdateServiceStub);
    stub.incomingVersion = { status: VersionStatus.Failed, version: '0.0.0' };

    const fixture = TestBed.createComponent(AgariSidebarComponent);
    fixture.detectChanges();

    const matChip: HTMLElement = fixture.debugElement.query(By.css('[data-test-id="update-chip"]'))?.nativeElement;
    expect(matChip).toBeDefined();
    expect(matChip.textContent?.trim()).toBe('0.0.0');
  });

  it('should reload when clicking the update chip when an incoming version is ready', () => {
    const locationStub = TestBed.inject(LocationStub);
    const versionUpdateStub = TestBed.inject(VersionUpdateServiceStub);
    versionUpdateStub.incomingVersion = { status: VersionStatus.Ready, version: '0.0.0' };

    const fixture = TestBed.createComponent(AgariSidebarComponent);
    fixture.detectChanges();

    const matChip: HTMLElement = fixture.debugElement.query(By.css('[data-test-id="update-chip"]'))?.nativeElement;
    matChip.click();
    fixture.detectChanges();

    expect(locationStub.reload).toBeCalledTimes(1);
    expect(versionUpdateStub.checkForUpdates).toBeCalledTimes(0);
  });

  it('should check for updates when clicking the update chip when an incoming version has failed downloading', () => {
    const locationStub = TestBed.inject(LocationStub);
    const versionUpdateStub = TestBed.inject(VersionUpdateServiceStub);
    versionUpdateStub.incomingVersion = { status: VersionStatus.Failed, version: '0.0.0' };

    const fixture = TestBed.createComponent(AgariSidebarComponent);
    fixture.detectChanges();

    const matChip: HTMLElement = fixture.debugElement.query(By.css('[data-test-id="update-chip"]'))?.nativeElement;
    matChip.click();
    fixture.detectChanges();

    expect(versionUpdateStub.checkForUpdates).toBeCalledTimes(1);
    expect(locationStub.reload).toBeCalledTimes(0);
  });

  it('should not do anything when clicking the update chip when an incoming version is downloading', async () => {
    const locationStub = TestBed.inject(LocationStub);
    const versionUpdateStub = TestBed.inject(VersionUpdateServiceStub);
    versionUpdateStub.incomingVersion = { status: VersionStatus.Loading, version: '0.0.0' };

    const fixture = TestBed.createComponent(AgariSidebarComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const matChip: HTMLElement = fixture.debugElement.query(By.css('[data-test-id="update-chip"]'))?.nativeElement;
    matChip.click();
    fixture.detectChanges();

    expect(versionUpdateStub.checkForUpdates).toBeCalledTimes(0);
    expect(locationStub.reload).toBeCalledTimes(0);
  });
});

class VersionUpdateServiceStub {
  incomingVersion: IncomingVersion | undefined;

  incomingVersion$ = new Observable((subscriber) => {
    subscriber.next(this.incomingVersion);
  });

  checkForUpdates = jest.fn<void, []>();
}

class LocationStub {
  reload = jest.fn<void, []>();
}
