import { DOCUMENT } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { NavigationItem, Profile } from '../../models/portfolio.model';

@Component({
  selector: 'app-dock',
  templateUrl: './dock.html',
  styleUrl: './dock.css',
})
export class Dock {
  private readonly document = inject(DOCUMENT);

  readonly navigationItems = input.required<readonly NavigationItem[]>();
  readonly profile = input.required<Profile>();
  readonly isDarkMode = signal(false);

  toggleTheme(): void {
    this.isDarkMode.update((isDarkMode) => !isDarkMode);
    this.document.documentElement.classList.toggle('dark-mode', this.isDarkMode());
    this.document.body.classList.toggle('dark-mode', this.isDarkMode());
  }
}
