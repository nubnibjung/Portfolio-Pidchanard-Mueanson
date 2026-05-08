import { Component } from '@angular/core';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Dock } from './components/dock/dock';
import { Education } from './components/education/education';
import { Experience } from './components/experience/experience';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import {
  education,
  experiences,
  navigationItems,
  profile,
  projects,
  skillGroups,
} from './data/portfolio.data';

@Component({
  selector: 'app-root',
  imports: [Hero, About, Experience, Education, Skills, Projects, Contact, Dock],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly navigationItems = navigationItems;
  protected readonly profile = profile;
  protected readonly experiences = experiences;
  protected readonly education = education;
  protected readonly skillGroups = skillGroups;
  protected readonly projects = projects;
}
