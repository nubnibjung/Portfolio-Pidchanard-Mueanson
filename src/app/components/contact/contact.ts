import { Component, input } from '@angular/core';
import { Profile } from '../../models/portfolio.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  readonly profile = input.required<Profile>();
}
