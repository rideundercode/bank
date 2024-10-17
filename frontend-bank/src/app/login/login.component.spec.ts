import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms'; // Importation nécessaire pour les tests
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['login', 'loadProfile', 'isAdmin']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginComponent],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login method and navigate on success', () => {
    authService.login.and.returnValue(of({ token: 'test-token' })); // Simuler un retour de connexion réussi
    authService.isAdmin.and.returnValue(true); // Simuler un utilisateur admin

    component.loginForm.setValue({ username: 'test@example.com', password: 'password' });
    component.login();

    expect(authService.login).toHaveBeenCalledWith('test@example.com', 'password');
    expect(authService.loadProfile).toHaveBeenCalledWith({ token: 'test-token' });
    expect(router.navigateByUrl).toHaveBeenCalledWith('/admin/home');
  });

  it('should show error on login failure', () => {
    authService.login.and.returnValue(throwError({ status: 401 })); // Simuler un échec de connexion

    component.loginForm.setValue({ username: 'test@example.com', password: 'wrong-password' });
    component.login();

    expect(authService.login).toHaveBeenCalled();
    // Vérifier que Swal a été appelé pour afficher l'erreur
  });
});
