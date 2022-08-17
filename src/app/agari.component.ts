import { Component } from '@angular/core';
import { AgariRoutingModule } from './agari.routing-module';

@Component({
  standalone: true,
  selector: 'agari-root',
  templateUrl: './agari.component.html',
  styleUrls: ['./agari.component.scss'],
  imports: [AgariRoutingModule],
})
export class AgariComponent {
  title = 'agari-kai-client';
}
