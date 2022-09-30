import { VersionStatus } from '../../../core/pwa/version-status.type';
import { StatusToColorPipe } from './status-to-color.pipe';

describe('StatusToColorPipe', () => {
  it('should map LOADING', () => {
    const pipe = new StatusToColorPipe();
    const result = pipe.transform(VersionStatus.Loading);
    expect(result).toBe('primary');
  });

  it('should map READY', () => {
    const pipe = new StatusToColorPipe();
    const result = pipe.transform(VersionStatus.Ready);
    expect(result).toBe('primary');
  });

  it('should map FAILED', () => {
    const pipe = new StatusToColorPipe();
    const result = pipe.transform(VersionStatus.Failed);
    expect(result).toBe('warn');
  });
});
