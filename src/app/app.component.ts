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

  applications = [
    {
      name: 'Home Page',
      link: 'https://rbrock44.github.io/home-page/',
    },
    {
      name: 'Family Recipes',
      link: 'https://rbrock44.github.io/family-recipes/',
    },
    {
      name: 'Cleaning Schedule',
      link: 'https://rbrock44.github.io/cleaning-schedule/',
    },
    {
      name: 'Scorekeeping By Rounds',
      link: 'https://rbrock44.github.io/scorekeeping-by-rounds/',
    },
    {
      name: 'Auction Advisor',
      link: 'https://rbrock44.github.io/auction-advisor/',
    },
    {
      name: '1705 David',
      link: 'https://rbrock44.github.io/1705-David/',
    },
    {
      name: 'Email Link Generator',
      link: 'https://rbrock44.github.io/email-link-generator/',
    }
  ]
}
