import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';

export const AGARI_ENVIRONMENT: InjectionToken<typeof environment> = new InjectionToken<typeof environment>('agari-environment');
