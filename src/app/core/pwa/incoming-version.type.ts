import { VersionStatus } from './version-status.type';

export interface IncomingVersion {
  status: VersionStatus;
  version: string;
}
