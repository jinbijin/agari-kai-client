import { TestBed } from '@angular/core/testing';
import { createTestScheduler } from '../../testing/create-test-scheduler';
import { AGARI_NAVIGATION_ITEMS, PROVIDE_AGARI_NAVIGATION_ITEMS } from './agari-navigation-items.token';
import { AGARI_ROUTES } from './agari-routes.token';

describe('AGARI_NAVIGATION_ITEMS', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PROVIDE_AGARI_NAVIGATION_ITEMS,
        {
          provide: AGARI_ROUTES,
          useValue: [
            { path: '', pathMatch: 'full', data: { menu: { icon: 'home', label: 'Home', testId: 'home' } } },
            { path: 'iconless', data: { menu: { label: 'Iconless', testId: 'without-icon' } } },
          ],
        },
      ],
    });
  });

  it('should create', () => {
    const navigationItems$ = TestBed.inject(AGARI_NAVIGATION_ITEMS);
    expect(navigationItems$).toBeDefined();
  });

  it('should return the correct items', () => {
    const navigationItems$ = TestBed.inject(AGARI_NAVIGATION_ITEMS);

    createTestScheduler().run(({ expectObservable }) => {
      expectObservable(navigationItems$).toBe('(a|)', {
        a: [
          { icon: 'home', label: 'Home', testId: 'home', routerLink: ['/'], routerLinkActiveOptions: { exact: true } },
          {
            label: 'Iconless',
            testId: 'without-icon',
            routerLink: ['/', 'iconless'],
            routerLinkActiveOptions: { exact: false },
          },
        ],
      });
    });
  });
});
