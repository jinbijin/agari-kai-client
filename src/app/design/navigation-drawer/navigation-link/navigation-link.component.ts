import { Component } from '@angular/core';

@Component({
  standalone: true,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'a[agariNavigationLink]',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss', '../../../aspects/pill/pill.scss', '../../../aspects/pill/pill-interactive.scss'],
})
export class NavigationLinkComponent {}
