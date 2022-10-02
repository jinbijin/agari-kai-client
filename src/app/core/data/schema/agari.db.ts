import { Injectable } from '@angular/core';
import { Dexie, Table } from 'dexie';
import { Entity } from './types/entity.type';
import { Tournament } from './types/tournament.type';

export interface AgariDb {
  tournaments: Table<Entity<Tournament>, number>;
}

@Injectable()
export class AgariDb extends Dexie {
  constructor() {
    super('agariDb');
  }
}
