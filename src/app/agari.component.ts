import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgariSidebarComponent } from './modules/sidebar/sidebar.component';

@Component({
  standalone: true,
  selector: 'agari-root',
  templateUrl: './agari.component.html',
  styleUrls: ['./agari.component.scss'],
  imports: [AgariSidebarComponent, RouterModule],
})
export class AgariComponent {}
