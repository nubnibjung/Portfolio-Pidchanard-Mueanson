import { Component, input } from '@angular/core';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly projects = input.required<readonly Project[]>();

  isSourceLink(label: string): boolean {
    return label.toLowerCase().includes('source') || label.toLowerCase().includes('github');
  }
}
