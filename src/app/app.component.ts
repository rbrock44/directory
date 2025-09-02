import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import {CommonModule, Location} from "@angular/common";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface Project {
  name: string;
  description: string;
  link?: string;
  github?: string;
}

interface Company {
  name: string;
  projects: Project[];
}

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
export class AppComponent implements OnInit {
  title = 'directory';
  modeUrlParam: string = 'mode';
  baseGithub = 'https://rbrock44.github.io/';
  githubUrl: string = 'https://github.com/rbrock44';
  linkedinUrl: string = 'https://www.linkedin.com/in/ryan-brock-4b8123262/';
  coffeeUrl: string = 'https://buymeacoffee.com/rbrock';
  selectedApp: Project | undefined = undefined;
  selectedCompany: Company | undefined = undefined;
  modeForm: FormGroup = new FormGroup({});
  startMode = true;

  applications: Project[] = [
    {
      name: 'Home Page',
      link: this.createLink('home-page'),
      github: this.createGithub('home-page'),
      description: 'Quick access to information Ryan wants'
    },
    {
      name: 'Woodworking Projects',
      link: this.createLink('woodworking-projects'),
      github: this.createGithub('woodworking-projects'),
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
      github: this.createGithub('family-recipes'),
      description: `All the family\'s recipes (and more)`
    },
    {
      name: 'Add Recipe',
      link: this.createLink('add-recipe'),
      github: this.createGithub('add-recipe'),
      description: 'A user friendly place to turn a recipe into JSON format for the family recipe website'
    },
    {
      name: 'Connect 4 [WIP]',
      link: this.createLink('connect-4'),
      github: this.createGithub('connect-4'),
      description: 'Work in Progress -> Play Connect 4 against various AI difficulties to have some fun and increase skill'
    },
    {
      name: 'Compare Achievements [WIP]',
      link: this.createLink('compare-achievements'),
      github: this.createGithub('compare-achievements'),
      description: 'Work in Progress -> Compare achievements across multiple platforms (steam first) and users with ease'
    },
    {
      name: 'Flash Cards',
      link: this.createLink('flash-cards'),
      github: this.createGithub('flash-cards'),
      description: 'Flash cards to help study'
    },
    {
      name: 'Cleaning Schedule',
      link: this.createLink('cleaning-schedule'),
      github: this.createGithub('cleaning-schedule'),
      description: 'Used to help keep track of people\'s cleaning schedule'
    },
    {
      name: 'Scorekeeping By Rounds',
      link: this.createLink('scorekeeping-by-rounds'),
      github: this.createGithub('scorekeeping-by-rounds'),
      description: 'Helps manage a game where teams/players keep score over multiple rounds. This was created for a non profit organization to manage their Trivia night instead of using excel'
    },
    {
      name: 'Enderle Cattle Co [WIP]',
      link: this.createLink('enderle-cattle-co'),
      github: this.createGithub('enderle-cattle-company'),
      description: 'A place for a cattle company to showcase their company, people, cattle and their story'
    },
    {
      name: '1705 David',
      link: this.createLink('1705-David'),
      github: this.createGithub('1705-David'),
      description: 'A place to showcase a rent house'
    },
    {
      name: 'Auction Advisor',
      link: this.createLink('auction-advisor'),
      github: this.createGithub('auction-advisor'),
      description: 'Helps manage an in person silent auction'
    },
    {
      name: 'Email Link Generator',
      link: this.createLink('email-link-generator'),
      github: this.createGithub('email-link-generator'),
      description: 'Helps create email links with parameters (fields)'
    },
    {
      name: 'Lost?',
      link: this.createLink('lost'),
      github: this.createGithub('lost'),
      description: 'A simple lost/redirection webpage for all unknown routes on my domain'
    }
  ];

  professionalApplications: Company[] = [
    {
      name: 'PGT Solutions',
      projects: [
        {
          name: 'Veteran Disability Questionnaire Forms',
          description: `I led the development of a full-stack web application for the VA focused on disability questionnaire forms.\n\nThe platform used React for the frontend, Node.js for the backend, and PostgreSQL for data storage.\n\nIt allowed veterans to complete and submit standardized disability forms through a modern, accessible interface.\n\nWe prioritized performance, accessibility, and compliance with government standards.`
        }
      ]
    },
    {
      name: 'GlobalSpec LLC',
      projects: [
        {
          name: 'Product Search Replacement',
          link: 'https://www.globalspec.com/search/products?term=motors',
          description: `I led the migration of the legacy /search/products page to a new React SSR application.\n\nThis was a high-priority initiative selected by the business to modernize a critical page and boost user engagement and revenue.\n\nThe frontend was built in React SSR, integrated with a Java + Elasticsearch backend, and used the Kotlin-based auth system I previously created.\n\nA major challenge was analytics integration, Adobe Analytics had hundreds of variables and years of technical debt. We worked closely with analytics and business teams to determine which variables were still relevant and when to populate them.\n\nThe subdomain switch introduced cookie storage and E2E testing issues due to domain-based session handling.\n\nDespite these challenges, we successfully delivered and launched the new SSR search experience to production.`
        },
        {
          name: 'Legacy Website Auth/User Migration',
          link: 'https://www.globalspec.com/MyGlobalSpec/NewProfile',
          description: `I migrated several legacy systems to the centralized Kotlin-based user authentication and account management service I had previously developed.\n\nThese legacy platforms had inconsistent data validation rules and siloed account structures that required extensive cleanup and unification.\n\nThe new service enforced strict backend validation and centralized all user data management logic.\n\nIntroducing backend validation caused the end-to-end (E2E) test suite to fail, since many E2E flows relied on inserting nearly blank records that no longer passed the new stricter validation rules.`
        },
        {
          name: 'Centralized Authentication System',
          description: `I developed a centralized authentication service in Kotlin to consolidate user login across many legacy websites, each of which previously required separate account creation.\n\nThis new system allowed users to register and sign in from a single location, eliminating duplicated accounts and improving user experience.\n\nThe solution enforced a universal validation rule set that replaced inconsistent or site-specific checks found across the legacy apps.\n\nOne major challenge was determining the correct scope of the project, certain responsibilities like leads and automated emails were owned by a separate microservice, requiring clear boundaries and coordination.`
        }
      ]
    },
    {
      name: 'Vizient Inc.',
      projects: [
        {
          name: 'Ginyu Force',
          description: 'After the Rebates work phased out, our team developed and maintained an ecosystem of 7 microservices.\n\nThis included 4 Angular frontends—one acting as a portal using Module Federation to integrate the other 3.\n\nWe also managed 3 Kotlin backend services, each corresponding to one of the non-portal frontends.\n\nThe architecture supported modular development with a cohesive user experience through the shared portal.'
        },
        {
          name: 'Rebates',
          description: `After working on Contract Administration, I joined the Rebates team, which took ownership of the rebate portion of the contract system.\n\nRebates had grown in complexity and was split off from the core Contract Administration platform.\n\nWe were responsible for handling rebate-specific workflows, calculations, and agreements as a standalone domain.\n\nThis separation allowed teams to focus more deeply on their areas and evolve the architecture to support future growth.`
        },
        {
          name: 'Contract Administration',
          description: `I joined this team, which just got started working on a contract management system for hospitals and supplier vendors.\n\nAt the time, Angular, Java, paired programming, and test-driven development (TDD) were all new to me, and this project gave me hands-on experience with each.\n\nThe contracts included 10–15 sections with up to 50 or so values per section.\n\nEdit history was a key feature and shown at the bottom of the contract detail page.\n\nAs the system scaled, we grew to around 16 microservices, which was also my first exposure to microservice architecture.`
        }
      ]
    },
    {
       name: 'Toyoda Gosei North America',
       projects: [
         {
           name: 'Toyota Shipping Confirmation System',
           description: `I developed a feature in the shipping scan verification system to track which parts were on which pallets and in what order they were loaded onto trucks.\n\nThis supported Toyota’s request for visibility into pallet sequencing at their circular-layout plant in Texas, where trucks unload one pallet at a time while circling the facility.\n\nI successfully rolled out the feature across 50 North American plants.\n\nI also worked directly with plant employees and department heads to create and implement training strategies for smooth adoption.`
         },
         {
           name: 'Bin Dumper',
           description: `One of the most unusual projects I worked on was reviving a broken legacy .exe known as the 'Bin Dumper'.\n\nAfter a Windows upgrade rendered it non-functional, I used a JetBrains decompiler to reverse engineer the logic.\n\nI then rebuilt the program as a C# Windows application from scratch.\n\nThe system also used a custom picture keyboard, where each image mapped to a combination of key presses (like Ctrl + A + 4).\n\nI worked with IT to decode those combinations and programmed the new application to respond accurately to them for input and navigation.`
         },
         {
          name: 'Health System Badge Integration',
          description: 'I led this development/project to resolve a badge access issue affecting 50–75 employees from our parent company. These employees were unable to scan into the child company’s on-site health station due to incompatible badge system data.\n\nI collaborated with both IT teams and secured access to the internal badge data system. This involved opening a port, allowing us to pull updated badge data from the parent company system.\n\nTo automate the syncing process, I developed a nightly batch job (shell script) that retrieved the latest badge numbers and updated the child company’s database accordingly.\n\nThe most complex part of this integration was reconciling badge values between the two systems. The parent company stored badge IDs in a raw form, while the health station required a proximity card value (derived through a bitwise shift operation). I solved and reverse-engineered the logic to correctly map database values to their corresponding proximity card outputs, ensuring all employees could successfully scan in and be treated accordingly.'
         },
         {
          name: 'Employee Separation Validation Tool',
          description: `I was initially tasked with manually verifying monthly separation lists (Excel files containing names of former employees) against our internal systems, a tedious and time-consuming process that often took several hours.\n\nTo streamline this, I developed a script that automated the validation process by querying Active Directory to check each employee's current status. The script efficiently flagged discrepancies and confirmed separations without manual lookups, reducing processing time from hours to minutes/seconds.\n\nDuring implementation, we discovered inconsistencies between systems due to the use of preferred names or nicknames. This led to a cross-system update requiring all identity-based processes to standardize on legal first and last names for consistency. My work ultimately improved both accuracy and efficiency while prompting broader improvements in data governance across teams.`
         }
       ]
     }
  ];

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const modeParam = params[this.modeUrlParam];

      if (modeParam === 'Professional') {
        this.startMode = false;
      }

      this.modeForm = this.fb.group({
        mode: [this.startMode] // true = Personal, false = Professional
      });

      this.subscribeToModeForm();
    });
  }

  subscribeToModeForm(): void {
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

  createGithub(name: string): string {
    return `https://github.com/rbrock44/${name}`
  }

  toggleDescription(app: any, event: Event) {
    const target = event.target as HTMLElement;

    if (target.tagName === 'A' || target.tagName === 'I') {
      return;
    }

    if (this.selectedApp === app) {
      this.selectedApp = undefined;
    } else {
      this.selectedApp = app;
    }
  }

  toggleCompanyDescription(app: any, company: any, event: Event) {
    const target = event.target as HTMLElement;

    if (target.tagName === 'A') {
      return;
    }

    if (this.selectedApp === app && this.selectedCompany === company) {
      this.selectedApp = undefined;
      this.selectedCompany = undefined;
    } else {
      this.selectedCompany = company;
      this.selectedApp = app;
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
