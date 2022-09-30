import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { StatusToActivePipe } from './pipes/status-to-active.pipe';
import { StatusToColorPipe } from './pipes/status-to-color.pipe';
import { StatusToDisabledPipe } from './pipes/status-to-disabled.pipe';
import { StatusToIconPipe } from './pipes/status-to-icon.pipe';
import { AgariSidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [AgariSidebarComponent, StatusToColorPipe, StatusToActivePipe, StatusToDisabledPipe, StatusToIconPipe],
  imports: [CommonModule, RouterModule, MatButtonModule, MatChipsModule, MatIconModule, MatListModule],
  exports: [AgariSidebarComponent],
})
export class SidebarModule {}
