import { Component, HostBinding, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'agari-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @HostBinding('attr.aria-hidden') ariaHidden = true;
  @Input() icon!: string;
}
