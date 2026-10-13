import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Location } from "@angular/common";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { COFFEE_URL, GITHUB_URL, LINKEDIN_URL } from './constants/constants';
import { PERSONAL_PROJECTS, PROFESSIONAL_PROJECTS } from './constants/constants-projects';
import { Company } from './models/company.model';
import { Project } from './models/project.model';

@Component({
    selector: 'app-root',
    imports: [
    ReactiveFormsModule,
    RouterOutlet
],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'directory';
  modeUrlParam: string = 'mode';
  githubUrl: string = GITHUB_URL;
  linkedinUrl: string = LINKEDIN_URL;
  coffeeUrl: string = COFFEE_URL;
  applications: Project[] = PERSONAL_PROJECTS;
  professionalApplications: Company[] = PROFESSIONAL_PROJECTS;
  selectedApp: Project | undefined = undefined;
  selectedCompany: Company | undefined = undefined;
  modeForm: FormGroup = new FormGroup({});
  startMode = true;

  constructor(
    private fb: FormBuilder,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.startMode = this.readModeFromUrl();

    this.modeForm = this.fb.group({
      mode: [this.startMode] // true = Personal, false = Professional
    });

    this.subscribeToModeForm();

    // Browser/mouse back and forward land here; show whichever mode the URL now names.
    this.location.subscribe(() => {
      this.selectedApp = undefined;
      this.selectedCompany = undefined;
      this.modeForm.get('mode')?.setValue(this.readModeFromUrl(), { emitEvent: false });
    });

    // Slot a Personal entry in underneath a Professional deep link so back lands on Personal.
    if (!this.startMode) {
      this.location.replaceState(this.buildUrl(true));
      this.location.go(this.buildUrl(false));
    }
  }

  subscribeToModeForm(): void {
    this.modeForm.get('mode')?.valueChanges.subscribe((mode: boolean) => {
      this.selectedApp = undefined;
      this.selectedCompany = undefined;
      this.location.go(this.buildUrl(mode));
    });
  }

  private readModeFromUrl(): boolean {
    const query = this.location.path().split('?')[1] ?? '';
    return new URLSearchParams(query).get(this.modeUrlParam) !== 'Professional';
  }

  get selectedMode() {
    return this.modeForm.get('mode')?.value ? 'Personal' : 'Professional';
  }

  toggleDescription(app: Project, event: Event) {
    if ((event.target as HTMLElement).closest('a')) {
      return;
    }

    if (this.selectedApp === app) {
      this.selectedApp = undefined;
    } else {
      this.selectedApp = app;
    }
  }

  toggleCompanyDescription(app: Project, company: Company, event: Event) {
    if ((event.target as HTMLElement).closest('a')) {
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

    if (!mode) {
      queryParams.set(this.modeUrlParam, 'Professional');
    }

    const path = this.location.path().split('?')[0];
    const end = queryParams.toString();
    if (end !== '') {
      return `${path}?${end}`;
    } else {
      return path;
    }
  }
}
