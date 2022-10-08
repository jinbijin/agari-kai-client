import { UtcDateTime } from 'src/app/common/utc-date-time';

export interface Revision {
  id?: number;
  updatedAt: UtcDateTime;
}
