import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'directory';
  baseGithub = 'https://rbrock44.github.io/';
  selectedApp = undefined;

  applications = [
    {
      name: 'Home Page',
      link: `${this.baseGithub}home-page/`,
      description: ''
    },
    {
      name: 'Family Recipes',
      link: `${this.baseGithub}family-recipes/`,
      description: 'Holds all family recipes'
    },
    {
      name: 'Cleaning Schedule',
      link: `${this.baseGithub}cleaning-schedule/`,
      description: 'Used to help keep track of people\'s upcoming cleaning schedule'
    },
    {
      name: 'Scorekeeping By Rounds',
      link: `${this.baseGithub}scorekeeping-by-rounds/`,
      description: ''
    },
    {
      name: '1705 David',
      link: `${this.baseGithub}1705-David/`,
      description: ''
    },
    {
      name: 'Auction Advisor',
      link: `${this.baseGithub}auction-advisor/`,
      description: ''
    },
    {
      name: 'Email Link Generator',
      link: `${this.baseGithub}email-link-generator/`,
      description: ''
    }
  ];

  toggleDescription(app: any, event: Event) {
    const target = event.target as HTMLElement;

    if (target.tagName === 'A') {
      return;
    }

    if (this.selectedApp === app) {
      this.selectedApp = undefined;
    } else {
      this.selectedApp = app;
    }
  }
}
