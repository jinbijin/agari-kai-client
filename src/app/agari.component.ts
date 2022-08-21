import { Component } from '@angular/core';
import { AgariRoutingModule } from './agari.routing-module';
import { NavigationDrawerComponent } from './design/navigation-drawer/navigation-drawer.component';

@Component({
  standalone: true,
  selector: 'agari-root',
  templateUrl: './agari.component.html',
  styleUrls: ['./agari.component.scss'],
  imports: [NavigationDrawerComponent, AgariRoutingModule],
})
export class AgariComponent {
  title = 'agari-kai-client';
}
