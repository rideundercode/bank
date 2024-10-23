import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';
import { AppHttpInterceptor } from './app-http.interceptor';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

describe('AppHttpInterceptor', () => {
  let interceptor: AppHttpInterceptor;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['accessToken']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    TestBed.configureTestingModule({
      providers: [
        AppHttpInterceptor,
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });

    interceptor = TestBed.inject(AppHttpInterceptor);
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should add Authorization header if not login request', () => {
    const req = new HttpRequest('GET', '/api/resource');
    authService.accessToken = 'test-token';
    
    const next: { handle: jasmine.Spy } = {
      handle: jasmine.createSpy('handle').and.returnValue(of({}))
    };

    interceptor.intercept(req, next);

    expect(next.handle).toHaveBeenCalled();
    const clonedRequest = next.handle.calls.mostRecent().args[0];
    expect(clonedRequest.headers.get('Authorization')).toBe('Bearer test-token');
  });

  it('should navigate to not-authorized on 403 or 401', () => {
    const req = new HttpRequest('GET', '/api/resource');
    const errorResponse = { status: 403 };
    
    const next: { handle: jasmine.Spy } = {
      handle: jasmine.createSpy('handle').and.returnValue(throwError(errorResponse))
    };

    interceptor.intercept(req, next).subscribe({
      next: () => fail('should have failed with 403 error'),
      error: () => {
        expect(router.navigateByUrl).toHaveBeenCalledWith('/user/not-authorized');
      }
    });
  });
});
