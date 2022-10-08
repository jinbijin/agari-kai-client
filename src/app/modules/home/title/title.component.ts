import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'agari-home-title',
  templateUrl: './title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class HomeTitleComponent {}
