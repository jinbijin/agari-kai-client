import { Uuid } from '../../../../common/uuid';
import { UtcDateTime } from '../../../../common/utc-date-time';

export type DbRecord<T> = T & { _id: Uuid; _updatedAt: UtcDateTime };
