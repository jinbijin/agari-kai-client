import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

@NgModule({})
export class MaterialConfigModule {
  static forRoot(): ModuleWithProviders<MaterialConfigModule> {
    return {
      ngModule: MaterialConfigModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (registry: MatIconRegistry) => {
            return () => {
              registry.setDefaultFontSetClass('material-symbols-rounded', 'mat-ligature-font');
            };
          },
          deps: [MatIconRegistry],
          multi: true,
        },
      ],
    };
  }
}
