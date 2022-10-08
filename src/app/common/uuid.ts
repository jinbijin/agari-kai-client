/* istanbul ignore file */
import { v4, validate, version } from 'uuid';
const typeBrand = Symbol('type');

export type Uuid = string & { [typeBrand]: 'uuidV4' };

export function isUuid(value: string): value is Uuid {
  return validate(value) && version(value) === 4;
}

export function tryParseUuid(value: string): Uuid | undefined {
  return isUuid(value) ? value : undefined;
}

export function parseUuid(value: string): Uuid {
  const uuid = tryParseUuid(value);
  if (!uuid) {
    throw new Error(`Could not parse "${value}" as Uuid.`);
  }
  return uuid;
}

export function uuid(): Uuid {
  return v4() as Uuid;
}
