import { inject } from '@angular/core';
import { concatMap, delay, map, MonoTypeOperatorFunction, of, switchMap, timer } from 'rxjs';
import { DELAY_AND_HOLD_CONFIG } from '../tokens/delay-and-hold-config.token';

export function delayAndHoldIf<T>(predicate: (value: T) => boolean): MonoTypeOperatorFunction<T> {
  const delayAndHoldConfig = inject(DELAY_AND_HOLD_CONFIG);
  return (source) =>
    source.pipe(
      switchMap((value) => (predicate(value) ? of(value).pipe(delay(delayAndHoldConfig.delayFor)) : of(value))),
      concatMap((value) => (predicate(value) ? timer(delayAndHoldConfig.holdFor).pipe(map(() => value)) : of(value)))
    );
}
