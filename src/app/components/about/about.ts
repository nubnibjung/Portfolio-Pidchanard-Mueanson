import { Component, input } from '@angular/core';
import { Education, Profile } from '../../models/portfolio.model';
import { SectionHeader } from '../section-header/section-header';

@Component({
  selector: 'app-about',
  imports: [SectionHeader],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly profile = input.required<Profile>();
  readonly education = input.required<Education>();
}
