import { UtcDateTime } from 'src/app/common/utc-date-time';
import { Uuid } from 'src/app/common/uuid';

type EntityType = 'tournament';

// TODO rename to Entity when other type is moved
export interface EntityRecord {
  id: Uuid;
  type: EntityType;
  revisionId: number;
}

interface EntityBase {
  _id: Uuid;
  _version?: number;
  _updatedAt: UtcDateTime;
}

export type Entity<T> = EntityBase & Partial<T>;
