import { Uuid } from 'src/app/common/uuid';

type EntityType = 'tournament';

// TODO rename to Entity when other type is moved
export interface EntityRecord {
  id: Uuid;
  type: EntityType;
  revisionId: number;
}
