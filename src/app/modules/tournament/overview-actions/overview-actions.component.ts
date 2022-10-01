import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'agari-tournament-overview-actions',
  templateUrl: './overview-actions.component.html',
  imports: [CommonModule, MatButtonModule],
  standalone: true,
})
export class TournamentOverviewActionsComponent {}
