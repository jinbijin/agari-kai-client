import { VersionStatus } from '../../../core/pwa/version-status.type';
import { StatusToIconPipe } from './status-to-icon.pipe';

describe('StatusToIconPipe', () => {
  it('should map LOADING', () => {
    const pipe = new StatusToIconPipe();
    const result = pipe.transform(VersionStatus.Loading);
    expect(result).toBe('downloading');
  });

  it('should map READY', () => {
    const pipe = new StatusToIconPipe();
    const result = pipe.transform(VersionStatus.Ready);
    expect(result).toBe('refresh');
  });

  it('should map FAILED', () => {
    const pipe = new StatusToIconPipe();
    const result = pipe.transform(VersionStatus.Failed);
    expect(result).toBe('error');
  });
});
