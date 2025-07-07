import {Component} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import {CommonModule, Location} from "@angular/common";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'directory';
  modeUrlParam: string = 'mode';
  baseGithub = 'https://rbrock44.github.io/';
  githubUrl: string = 'https://github.com/rbrock44';
  linkedinUrl: string = 'https://www.linkedin.com/in/ryan-brock-4b8123262/';
  coffeeUrl: string = 'https://buymeacoffee.com/rbrock';
  selectedApp = undefined;
  selectedCompany = undefined;
  modeForm: FormGroup;
  startMode = true;

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

  professionalApplications = [
    {
      company: 'PGT Solutions',
      projects: [
        {
          name: 'Veteran Disability Questionnaire Forms',
          link: '',
          description: ''
        }
      ]
    },
    {
      company: 'GlobalSpec LLC',
      projects: [
        {
          name: 'Product Search Replacement',
          link: 'https://www.globalspec.com/search/products?term=motors',
          description: `I led the migration of the legacy /search/products page to a new React SSR application.\nThis was a high-priority initiative selected by the business to modernize a critical page and boost user engagement and revenue.\nThe frontend was built in React SSR, integrated with a Java + Elasticsearch backend, and used the Kotlin-based auth system I previously created.\nA major challenge was analytics integration, Adobe Analytics had hundreds of variables and years of technical debt.\nWe worked closely with analytics and business teams to determine which variables were still relevant and when to populate them.\nThe subdomain switch introduced cookie storage and E2E testing issues due to domain-based session handling.\nDespite these challenges, we successfully delivered and launched the new SSR search experience to production.`
        },
        {
          name: 'Legacy Website Authentication Migration',
          link: 'https://www.globalspec.com/MyGlobalSpec/NewProfile',
          description: ``
        },
        {
          name: 'Centralized Authentication System',
          link: '',
          description: `I developed a centralized authentication service in Kotlin to consolidate user login across five legacy websites, each of which previously required separate account creation.\nThis new system allowed users to register and sign in from a single location, eliminating duplicated accounts and improving user experience.\nThe solution enforced a universal validation rule set that replaced inconsistent or site-specific checks found across the legacy apps.\nOne major challenge was determining the correct scope of the project—certain responsibilities like leads and automated emails were owned by a separate microservice, requiring clear boundaries and coordination.\nAnother key challenge was integrating stricter validation into a loosely enforced legacy ecosystem.\nIntroducing backend validation caused the end-to-end (E2E) test suite to fail, since many E2E flows relied on inserting nearly blank records that no longer passed the new stricter validation rules.`
        }
      ]
    },
    {
      company: 'Vizient Inc.',
      projects: [
        {
          name: 'Ginyu Force',
          link: '',
          description: ''
        },
        {
          name: 'Rebates',
          link: '',
          description: ''
        },
        {
          name: 'Contract Administration',
          link: '',
          description: ''
        }
      ]
    },
    {
       company: 'Toyoda Gosei North America',
       projects: [
         {
           name: 'Toyota Shipping Confirmation System (TSCS)',
           link: '',
           description: ''
         },
         {
          name: 'Cross-Company Badge Integration System',
          link: '',
          description: 'At my previous role, I led a project to resolve a badge access issue affecting 50–75 employees from our parent company. These employees were unable to scan into the child company’s on-site health station due to incompatible badge system data.\nI collaborated with both IT teams and secured access to the internal badge data system. This involved opening a port, allowing us to pull updated badge data from the parent company system.\nTo automate the syncing process, I developed a nightly batch job (shell script) that retrieved the latest badge numbers and updated the child company’s database accordingly.\nThe most complex part of this integration was reconciling badge values between the two systems. The parent company stored badge IDs in a raw form, while the health station required a proximity card value—derived through a bitwise shift operation and possibly masking. I reverse-engineered the logic to correctly map database values to their corresponding proximity card outputs, ensuring all employees could successfully scan in and be treated accordingly.'
         },
         {
          name: 'Automated Employee Separation Validation Tool',
          link: '',
          description: `I was initially tasked with manually verifying monthly separation lists (Excel files containing names of former employees) against our internal systems, a tedious and time-consuming process that often took several hours.\nTo streamline this, I developed a script that automated the validation process by querying Active Directory to check each employee's current status. The script efficiently flagged discrepancies and confirmed separations without manual lookups, reducing processing time from hours to minutes.\nDuring implementation, we discovered inconsistencies between systems due to the use of preferred names or nicknames. This led to a cross-system update requiring all identity-based processes to standardize on legal first and last names for consistency. My work ultimately improved both accuracy and efficiency while prompting broader improvements in data governance across teams.`
         }
       ]
     }
  ];

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private route: ActivatedRoute,
  ) {
    const queryParams = new URLSearchParams(window.location.search);
    const modeParam = queryParams.get(this.modeUrlParam);;
   console.log('constructor: ', modeParam, modeParam === 'Professional')
    if (modeParam !== null && modeParam !== '') {
      if (modeParam === 'Professional') {
        this.startMode = false;
      }
    }

    console.log('constructor: start: ', this.startMode)
    this.modeForm = this.fb.group({
      mode: [this.startMode], // true = Personal, false = Professional
    });
  }

  ngOnInit(): void {
    this.modeForm.get('mode')?.valueChanges.subscribe((mode: boolean) => {
      this.selectedApp = undefined;
      this.selectedCompany = undefined;
      this.location.replaceState(this.buildUrl(mode));
    });
  }

  get selectedMode() {
    return this.modeForm.get('mode')?.value ? 'Personal' : 'Professional';
  }

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

  toggleCompanyDescription(appIndex: any, companyIndex: any, event: Event) {
    const target = event.target as HTMLElement;

    if (target.tagName === 'A') {
      return;
    }

    if (this.selectedApp === appIndex && this.selectedCompany === companyIndex) {
      this.selectedApp = undefined;
      this.selectedCompany = undefined;
    } else {
      this.selectedCompany = companyIndex;
      this.selectedApp = appIndex;
    }
  }

  private buildUrl(mode: boolean): string {
    const queryParams = new URLSearchParams();

    if (this.selectedMode !== null && this.selectedMode !== 'Personal') {
      queryParams.set(this.modeUrlParam, this.selectedMode);
    }

    const end = queryParams.toString();
    if (end !== '') {
      return `${location.pathname}?${queryParams.toString()}`;
    } else {
      return location.pathname;
    }
  }
}
