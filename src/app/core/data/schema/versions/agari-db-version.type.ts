import { Transaction } from 'dexie';

export interface AgariDbVersion {
  version: number;
  schema: Record<string, string>;
  onUpdateNeeded?: (transaction: Transaction) => void | Promise<void>;
}
