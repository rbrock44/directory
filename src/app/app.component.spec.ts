import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Location } from '@angular/common';
import { provideLocationMocks } from '@angular/common/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([]), provideLocationMocks()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'directory' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('directory');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Ryan\'s Website Directory');
  });

  it('should push a history entry when switching mode and go back on popstate', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const location = TestBed.inject(Location);
    fixture.detectChanges();

    app.modeForm.get('mode')?.setValue(false);
    expect(app.selectedMode).toBe('Professional');
    expect(location.path()).toContain('mode=Professional');

    location.back();
    expect(app.selectedMode).toBe('Personal');
  });

  it('should restore a Professional deep link with Personal underneath', () => {
    const location = TestBed.inject(Location);
    location.replaceState('/?mode=Professional');
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app.selectedMode).toBe('Professional');

    location.back();
    expect(app.selectedMode).toBe('Personal');
  });
});
