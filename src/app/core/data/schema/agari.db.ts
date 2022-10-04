import { Injectable } from '@angular/core';
import { Dexie, Table } from 'dexie';
import { Uuid } from 'src/app/common/uuid';
import { Datum } from './types/datum.type';
import { EntityRecord } from './types/entity.type';
import { Revision } from './types/revision.type';

export interface AgariDb {
  entities: Table<EntityRecord, Uuid>;
  data: Table<Datum, Uuid>;
  revisions: Table<Revision, number>;
}

@Injectable()
export class AgariDb extends Dexie {
  constructor() {
    super('agariDb');
  }
}
