import { Component, input } from '@angular/core';
import { NavigationItem, Profile } from '../../models/portfolio.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly profile = input.required<Profile>();
  readonly navigationItems = input.required<readonly NavigationItem[]>();
}
