/* istanbul ignore file */
import { Injectable } from '@angular/core';
import { Dexie, Table } from 'dexie';
import { Tournament } from './types/tournament.type';
import { DbRecord } from './types/db-record.type';

export interface AgariDb {
  tournaments: Table<DbRecord<Tournament>>;
}

@Injectable()
export class AgariDb extends Dexie {
  constructor() {
    super('agariDb');
  }
}
