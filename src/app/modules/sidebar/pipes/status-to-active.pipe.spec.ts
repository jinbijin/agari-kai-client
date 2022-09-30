import { VersionStatus } from '../../../core/pwa/version-status.type';
import { StatusToActivePipe } from './status-to-active.pipe';

describe('StatusToActivePipe', () => {
  it('should map LOADING', () => {
    const pipe = new StatusToActivePipe();
    const result = pipe.transform(VersionStatus.Loading);
    expect(result).toBe(false);
  });

  it('should map READY', () => {
    const pipe = new StatusToActivePipe();
    const result = pipe.transform(VersionStatus.Ready);
    expect(result).toBe(true);
  });

  it('should map FAILED', () => {
    const pipe = new StatusToActivePipe();
    const result = pipe.transform(VersionStatus.Failed);
    expect(result).toBe(true);
  });
});
