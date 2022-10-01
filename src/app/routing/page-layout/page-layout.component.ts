import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'agari-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
  imports: [CommonModule, RouterModule, MatToolbarModule],
  standalone: true,
})
export class PageLayoutComponent {
  title$ = inject(ActivatedRoute).title;
}
