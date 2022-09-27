import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[agariButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss', '../../aspects/pill/pill.scss', '../../aspects/pill/pill-interactive.scss'],
  standalone: true,
})
export class ButtonComponent {}
