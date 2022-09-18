import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';
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
            { path: '', pathMatch: 'full', data: { menu: { icon: 'home', label: 'Home' } } },
            { path: 'iconless', data: { menu: { label: 'Iconless' } } },
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
    const testScheduler = new TestScheduler((actual, expected) => expect(actual).toEqual(expected));
    const navigationItems$ = TestBed.inject(AGARI_NAVIGATION_ITEMS);

    testScheduler.run(({ expectObservable }) => {
      expectObservable(navigationItems$).toBe('(a|)', {
        a: [
          { icon: 'home', label: 'Home', routerLink: ['/'], routerLinkActiveOptions: { exact: true } },
          { label: 'Iconless', routerLink: ['/', 'iconless'], routerLinkActiveOptions: { exact: false } },
        ],
      });
    });
  });
});
