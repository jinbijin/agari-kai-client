import { Uuid } from 'src/app/common/uuid';

export interface Datum {
  id: Uuid;
  key: string;
  value: string | number | null;
  revisionId: number;
}
