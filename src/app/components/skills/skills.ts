import { Component, input } from '@angular/core';
import { SkillGroup } from '../../models/portfolio.model';
import { SectionHeader } from '../section-header/section-header';

@Component({
  selector: 'app-skills',
  imports: [SectionHeader],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  readonly skillGroups = input.required<readonly SkillGroup[]>();
}
