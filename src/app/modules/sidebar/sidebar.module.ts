import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AgariSidebarComponent } from './sidebar.component';
import { StatusToActivePipe } from './status-to-active.pipe';
import { StatusToColorPipe } from './status-to-color.pipe';
import { StatusToIconPipe } from './status-to-icon.pipe';

@NgModule({
  declarations: [AgariSidebarComponent, StatusToColorPipe, StatusToActivePipe, StatusToIconPipe],
  imports: [CommonModule, RouterModule, MatButtonModule, MatChipsModule, MatIconModule, MatListModule],
  exports: [AgariSidebarComponent],
})
export class SidebarModule {}
