import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'agari-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() icon!: string;
}
