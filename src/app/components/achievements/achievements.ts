import { Component, input } from '@angular/core';
import { Achievement } from '../../models/portfolio.model';
import { SectionHeader } from '../section-header/section-header';

@Component({
  selector: 'app-achievements',
  imports: [SectionHeader],
  templateUrl: './achievements.html',
  styleUrl: './achievements.css',
})
export class Achievements {
  readonly achievements = input.required<readonly Achievement[]>();
}
