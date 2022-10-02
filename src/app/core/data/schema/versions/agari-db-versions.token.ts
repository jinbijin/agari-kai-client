import { InjectionToken } from '@angular/core';
import { AgariDbVersion } from './agari-db-version.type';

export const AGARI_DB_VERSIONS = new InjectionToken<AgariDbVersion[]>('agari-db-versions');
