import { Provider } from '@angular/core';

export function provideAs(override: any, target: any): Provider[] {
  return [override, { provide: target, useExisting: override }];
}
