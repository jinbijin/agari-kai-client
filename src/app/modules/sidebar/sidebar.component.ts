import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconComponent } from 'src/app/design/icon/icon.component';
import { NavigationModule } from 'src/app/design/navigation/navigation.module';

@Component({
  standalone: true,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'aside[agariSidebar]',
  templateUrl: './sidebar.component.html',
  imports: [CommonModule, RouterModule, IconComponent, NavigationModule],
})
export class AgariSidebarComponent {}
