import { InjectionToken } from '@angular/core';

export interface DelayAndHoldConfig {
  delayFor: number;
  holdFor: number;
}

export const DELAY_AND_HOLD_CONFIG: InjectionToken<DelayAndHoldConfig> = new InjectionToken<DelayAndHoldConfig>('delay-and-hold-config');
