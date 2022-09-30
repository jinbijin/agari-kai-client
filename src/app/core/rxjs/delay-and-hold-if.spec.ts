import { inject, InjectionToken } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { DELAY_AND_HOLD_CONFIG } from '../tokens/delay-and-hold-config.token';
import { delayAndHoldIf } from './delay-and-hold-if';

const INPUT_OBSERVABLE: InjectionToken<Observable<boolean>> = new InjectionToken('input-observable');
const OUTPUT_OBSERVABLE: InjectionToken<Observable<boolean>> = new InjectionToken('output-observable', {
  providedIn: 'root',
  factory: () => {
    const input = inject(INPUT_OBSERVABLE);
    return input.pipe(delayAndHoldIf((x) => x));
  },
});

describe('delayAndHoldIf', () => {
  it('should delay and hold selected values', () => {
    new TestScheduler((actual, expected) => expect(actual).toEqual(expected)).run(({ cold, expectObservable }) => {
      TestBed.configureTestingModule({
        providers: [
          { provide: INPUT_OBSERVABLE, useValue: cold('a--b--(c|)', { a: false, b: true, c: false }) },
          { provide: DELAY_AND_HOLD_CONFIG, useValue: { delayFor: 2, holdFor: 3 } },
        ],
      });

      const output = TestBed.inject(OUTPUT_OBSERVABLE);
      expectObservable(output).toBe('a----b--(c|)', { a: false, b: true, c: false });
    });
  });

  it('should delay and hold selected values if repeated', () => {
    new TestScheduler((actual, expected) => expect(actual).toEqual(expected)).run(({ cold, expectObservable }) => {
      TestBed.configureTestingModule({
        providers: [
          { provide: INPUT_OBSERVABLE, useValue: cold('a--bbb(c|)', { a: false, b: true, c: false }) },
          { provide: DELAY_AND_HOLD_CONFIG, useValue: { delayFor: 2, holdFor: 3 } },
        ],
      });

      const output = TestBed.inject(OUTPUT_OBSERVABLE);
      expectObservable(output).toBe('a----b--(c|)', { a: false, b: true, c: false });
    });
  });

  it('should skip values if delayed past next value', () => {
    new TestScheduler((actual, expected) => expect(actual).toEqual(expected)).run(({ cold, expectObservable }) => {
      TestBed.configureTestingModule({
        providers: [
          { provide: INPUT_OBSERVABLE, useValue: cold('a--b-(c|)', { a: false, b: true, c: false }) },
          { provide: DELAY_AND_HOLD_CONFIG, useValue: { delayFor: 2, holdFor: 3 } },
        ],
      });

      const output = TestBed.inject(OUTPUT_OBSERVABLE);
      expectObservable(output).toBe('a----(c|)', { a: false, c: false });
    });
  });
});
