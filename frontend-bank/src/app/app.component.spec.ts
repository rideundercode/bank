import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'frontend-bank'`, () => {
    expect(component.title).toEqual('frontend-bank');
  });

  it('should render title in an h1 tag', () => {
    fixture.detectChanges(); // Déclenche la détection des changements
    const compiled = fixture.nativeElement as HTMLElement; // Récupère l'élément natif
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, frontend-bank'); // Vérifie le contenu de l'h1
  });
});
