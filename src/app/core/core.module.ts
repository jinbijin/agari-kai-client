import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialConfigModule } from './material-config/material-config.module';
import { PwaModule } from './pwa/pwa.module';

@NgModule({
  imports: [HttpClientModule, PwaModule, MaterialConfigModule.forRoot()],
  exports: [HttpClientModule, PwaModule],
})
export class CoreModule {}
