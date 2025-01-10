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
      description: 'Quick access to information Ryan wants'
    },
    {
      name: 'Drive Status',
      link: `${this.baseGithub}drive-status/`,
      description: 'Quick access to drive connection statuses'
    },
    {
      name: 'Family Recipes',
      link: `${this.baseGithub}family-recipes/`,
      description: 'Quick access to the family\'s recipes'
    },
    {
      name: 'Flash Cards',
      link: `${this.baseGithub}flash-cards/`,
      description: 'Flash cards to help study'
    },
    {
      name: 'Cleaning Schedule',
      link: `${this.baseGithub}cleaning-schedule/`,
      description: 'Used to help keep track of people\'s cleaning schedule'
    },
    {
      name: 'Scorekeeping By Rounds',
      link: `${this.baseGithub}scorekeeping-by-rounds/`,
      description: 'Helps manage a game where teams/players keep score over multiple rounds'
    },
    {
      name: '1705 David',
      link: `${this.baseGithub}1705-David/`,
      description: 'A place to showcase the first rent house'
    },
    {
      name: 'Auction Advisor',
      link: `${this.baseGithub}auction-advisor/`,
      description: 'Helps manage an in person silent auction'
    },
    {
      name: 'Email Link Generator',
      link: `${this.baseGithub}email-link-generator/`,
      description: 'Helps create email links with correct fields'
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
