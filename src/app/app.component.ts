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
  githubUrl: string = 'https://github.com/rbrock44';
  linkedinUrl: string = 'https://www.linkedin.com/in/ryan-brock-4b8123262/';
  coffeeUrl: string = 'https://buymeacoffee.com/rbrock';
  selectedApp = undefined;

  applications = [
    {
      name: 'Home Page',
      link: this.createLink('home-page'),
      description: 'Quick access to information Ryan wants'
    },
    {
      name: 'Woodworking Projects',
      link: this.createLink('woodworking-projects'),
      description: 'Shows off the woodworking projects'
    },
    // {
    //   name: 'Drive Status',
    //   link: this.createLink('drive-status'),
    //   description: 'OpenMediaVault drive connection statuses'
    // },
    {
      name: 'Family Recipes',
      link: this.createLink('family-recipes'),
      description: 'All the family\'s recipes (and more)'
    },
    {
      name: 'Add Recipe',
      link: this.createLink('add-recipe'),
      description: 'A user friendly place to turn a recipe into JSON format for the family recipe website'
    },
    {
      name: 'Connect 4 [WIP]',
      link: this.createLink('connect-4'),
      description: 'Play Connect 4 against various AI difficulties to have some fun and increase skill'
    },
    {
      name: 'Compare Achievements [WIP]',
      link: this.createLink('compare-achievements'),
      description: 'Compare achievements across multiple platforms and users with ease'
    },
    {
      name: 'Flash Cards',
      link: this.createLink('flash-cards'),
      description: 'Flash cards to help study'
    },
    {
      name: 'Cleaning Schedule',
      link: this.createLink('cleaning-schedule'),
      description: 'Used to help keep track of people\'s cleaning schedule'
    },
    {
      name: 'Scorekeeping By Rounds',
      link: this.createLink('scorekeeping-by-rounds'),
      description: 'Helps manage a game where teams/players keep score over multiple rounds'
    },
    {
      name: '1705 David',
      link: this.createLink('1705-David'),
      description: 'A place to showcase a rent house'
    },
    {
      name: 'Auction Advisor',
      link: this.createLink('auction-advisor'),
      description: 'Helps manage an in person silent auction'
    },
    {
      name: 'Email Link Generator',
      link: this.createLink('email-link-generator'),
      description: 'Helps create email links with parameters (fields)'
    },
    {
      name: 'Lost?',
      link: this.createLink('lost'),
      description: 'A simple lost/redirection webpage for all unknown routes on my domain'
    }
  ];

  createLink(name: string): string {
    return `https://${name}.ryan-brock.com/`
  }

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
