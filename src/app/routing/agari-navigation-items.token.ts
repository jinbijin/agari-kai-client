import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { AgariNavigationItem } from './agari-navigation-item.type';

export const AGARI_NAVIGATION_ITEMS: InjectionToken<Observable<AgariNavigationItem[]>> = new InjectionToken<
  Observable<AgariNavigationItem[]>
>('agari-navigation-items');
