import { Uuid } from 'src/app/common/uuid';

export type EntityType = 'tournament';

export interface Entity {
  id: Uuid;
  type: EntityType;
  revisionId: number;
}
