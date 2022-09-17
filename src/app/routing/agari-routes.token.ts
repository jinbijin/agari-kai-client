import { InjectionToken } from '@angular/core';
import { AgariRoute } from './agari-route.type';

export const AGARI_ROUTES: InjectionToken<AgariRoute[]> = new InjectionToken<AgariRoute[]>('agari-routes');
