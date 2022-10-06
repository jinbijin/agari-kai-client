/* istanbul ignore file */
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { AgariDb } from './schema/agari.db';
import { AgariDbVersion } from './schema/versions/agari-db-version.type';
import { AGARI_DB_VERSIONS } from './schema/versions/agari-db-versions.token';

const versions: AgariDbVersion[] = [
  {
    version: 1,
    schema: {
      entities: 'id, type',
      data: '[id+key+revisionId], [id+revisionId]',
      revisions: '++id',
    },
  },
];

@NgModule({})
export class DataModule {
  static forRoot(): ModuleWithProviders<DataModule> {
    return {
      ngModule: DataModule,
      providers: [
        { provide: AGARI_DB_VERSIONS, useValue: [...versions].sort((x, y) => y.version - x.version) },
        AgariDb,
        {
          provide: APP_INITIALIZER,
          useFactory: (agariDb: AgariDb, agariDbVersions: AgariDbVersion[]) => async () => {
            for (const agariDbVersion of agariDbVersions) {
              const version = agariDb.version(agariDbVersion.version);
              version.stores(agariDbVersion.schema);
              if (agariDbVersion.onUpdateNeeded) {
                version.upgrade(agariDbVersion.onUpdateNeeded);
              }
            }
            await agariDb.open();
          },
          deps: [AgariDb, AGARI_DB_VERSIONS],
          multi: true,
        },
      ],
    };
  }
}
