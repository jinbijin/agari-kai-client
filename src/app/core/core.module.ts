import { NgModule } from '@angular/core';
import { PwaModule } from './pwa/pwa.module';

@NgModule({
  imports: [PwaModule],
  exports: [PwaModule],
})
export class CoreModule {}
