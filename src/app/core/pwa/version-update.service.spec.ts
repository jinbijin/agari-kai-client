import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SwUpdate, VersionEvent } from '@angular/service-worker';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { VersionStatus } from './version-status.type';
import { VersionUpdateService } from './version-update.service';

describe('VersionUpdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [VersionUpdateService, SwUpdateStub, { provide: SwUpdate, useExisting: SwUpdateStub }] });
  });

  it('should map NO_NEW_VERSION_DETECTED', () => {
    const service = TestBed.inject(VersionUpdateService);
    new TestScheduler((actual, expected) => expect(actual).toEqual(expected)).run(({ expectObservable }) => {
      expectObservable(service.incomingVersion$).toBe('a', { a: undefined });
    });
  });

  it('should map VERSION_DETECTED', () => {
    const service = TestBed.inject(VersionUpdateService);
    const stub = TestBed.inject(SwUpdateStub);
    stub.versionEvent = { type: 'VERSION_DETECTED', version: { hash: 'hash', appData: { version: '0.0.0' } } };
    new TestScheduler((actual, expected) => expect(actual).toEqual(expected)).run(({ expectObservable }) => {
      expectObservable(service.incomingVersion$).toBe('a', { a: { status: VersionStatus.Loading, version: '0.0.0' } });
    });
  });

  it('should map VERSION_READY', () => {
    const service = TestBed.inject(VersionUpdateService);
    const stub = TestBed.inject(SwUpdateStub);
    stub.versionEvent = {
      type: 'VERSION_READY',
      currentVersion: { hash: 'hash', appData: { version: '0.0.0' } },
      latestVersion: { hash: 'hash', appData: { version: '1.0.0' } },
    };
    new TestScheduler((actual, expected) => expect(actual).toEqual(expected)).run(({ expectObservable }) => {
      expectObservable(service.incomingVersion$).toBe('a', { a: { status: VersionStatus.Ready, version: '1.0.0' } });
    });
  });

  it('should map VERSION_INSTALLATION_FAILED', () => {
    const service = TestBed.inject(VersionUpdateService);
    const stub = TestBed.inject(SwUpdateStub);
    stub.versionEvent = { type: 'VERSION_INSTALLATION_FAILED', version: { hash: 'hash', appData: { version: '0.0.0' } }, error: '' };
    new TestScheduler((actual, expected) => expect(actual).toEqual(expected)).run(({ expectObservable }) => {
      expectObservable(service.incomingVersion$).toBe('a', { a: { status: VersionStatus.Failed, version: '0.0.0' } });
    });
  });

  it('should check for updates', () => {
    const service = TestBed.inject(VersionUpdateService);
    const stub = TestBed.inject(SwUpdateStub);

    service.checkForUpdates();
    expect(stub.checkForUpdate).toBeCalledTimes(1);
  });
});

@Injectable()
class SwUpdateStub {
  versionEvent: VersionEvent = { type: 'NO_NEW_VERSION_DETECTED', version: { hash: 'hash' } };

  get versionUpdates(): Observable<VersionEvent> {
    return new Observable((subscriber) => {
      subscriber.next(this.versionEvent);
      return subscriber;
    });
  }

  checkForUpdate = jest.fn<void, []>();
}
