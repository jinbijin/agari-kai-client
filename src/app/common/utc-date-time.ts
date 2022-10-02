import { DateTime } from 'luxon';

const typeBrand = Symbol('type');

export type UtcDateTime = string & { [typeBrand]: 'utcDateTime' };

export function fromUtcDateTime(value: UtcDateTime): DateTime {
  return DateTime.fromISO(value);
}

export function toUtcDateTime(value: DateTime): UtcDateTime {
  return value.toISO() as UtcDateTime;
}
