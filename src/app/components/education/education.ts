import { Component, input } from '@angular/core';
import { Education as EducationModel } from '../../models/portfolio.model';
import { SectionHeader } from '../section-header/section-header';

@Component({
  selector: 'app-education',
  imports: [SectionHeader],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  readonly education = input.required<EducationModel>();
}
