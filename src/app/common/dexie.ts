import { Observable as DexieObservable } from 'dexie';
import { Observable } from 'rxjs';

export function promote<T>(source: DexieObservable<T>): Observable<T> {
  return new Observable((subscriber) => source.subscribe(subscriber));
}
