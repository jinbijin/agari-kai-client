import { VersionStatus } from '../../../core/pwa/version-status.type';
import { StatusToDisabledPipe } from './status-to-disabled.pipe';

describe('StatusToDisabledPipe', () => {
  it('should map LOADING', () => {
    const pipe = new StatusToDisabledPipe();
    const result = pipe.transform(VersionStatus.Loading);
    expect(result).toBe(true);
  });

  it('should map READY', () => {
    const pipe = new StatusToDisabledPipe();
    const result = pipe.transform(VersionStatus.Ready);
    expect(result).toBe(false);
  });

  it('should map FAILED', () => {
    const pipe = new StatusToDisabledPipe();
    const result = pipe.transform(VersionStatus.Failed);
    expect(result).toBe(true);
  });
});
