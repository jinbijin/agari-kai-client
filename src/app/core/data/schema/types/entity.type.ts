import { UtcDateTime } from 'src/app/common/utc-date-time';
import { Uuid } from 'src/app/common/uuid';

interface EntityBase {
  _id: Uuid;
  _version?: number;
  _updatedAt: UtcDateTime;
}

export type Entity<T> = EntityBase & Partial<T>;
