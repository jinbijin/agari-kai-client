import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationDrawerComponent } from './design/navigation-drawer/navigation-drawer.component';

@Component({
  standalone: true,
  selector: 'agari-root',
  templateUrl: './agari.component.html',
  styleUrls: ['./agari.component.scss'],
  imports: [NavigationDrawerComponent, RouterModule],
})
export class AgariComponent {}
