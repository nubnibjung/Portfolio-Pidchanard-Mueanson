import { Component, input, signal } from '@angular/core';
import { Experience as ExperienceModel } from '../../models/portfolio.model';
import { SectionHeader } from '../section-header/section-header';

@Component({
  selector: 'app-experience',
  imports: [SectionHeader],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  readonly experiences = input.required<readonly ExperienceModel[]>();
  readonly expandedIndexes = signal<ReadonlySet<number>>(new Set());

  isExpanded(index: number): boolean {
    return this.expandedIndexes().has(index);
  }

  toggleExperience(index: number): void {
    this.expandedIndexes.update((expandedIndexes) => {
      const nextIndexes = new Set(expandedIndexes);

      if (nextIndexes.has(index)) {
        nextIndexes.delete(index);
      } else {
        nextIndexes.add(index);
      }

      return nextIndexes;
    });
  }
}
