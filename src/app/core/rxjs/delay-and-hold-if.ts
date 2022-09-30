import { inject } from '@angular/core';
import { concat, concatMap, delay, distinctUntilChanged, ignoreElements, MonoTypeOperatorFunction, of, switchMap, timer } from 'rxjs';
import { DELAY_AND_HOLD_CONFIG } from '../tokens/delay-and-hold-config.token';

export function delayAndHoldIf<T>(predicate: (value: T) => boolean): MonoTypeOperatorFunction<T> {
  const delayAndHoldConfig = inject(DELAY_AND_HOLD_CONFIG);
  return (source) =>
    source.pipe(
      distinctUntilChanged((prev, curr) => predicate(prev) == predicate(curr)),
      switchMap((value) => (predicate(value) ? of(value).pipe(delay(delayAndHoldConfig.delayFor)) : of(value))),
      concatMap((value) => (predicate(value) ? concat(of(value), timer(delayAndHoldConfig.holdFor).pipe(ignoreElements())) : of(value)))
    );
}
