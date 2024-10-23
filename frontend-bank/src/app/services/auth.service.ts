import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class AuthService {
isAuth: boolean = false;
roles: any;
username: any;
accessToken!: any;

constructor(private http: HttpClient, private router: Router) {}

  isAdmin(): boolean {
    return this.roles && this.roles.includes('ADMIN');
  }

  public login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Changez le type de contenu en JSON
    });

    const body = JSON.stringify({
      username: username,
      pass: password
    });

    return this.http.post('http://localhost:8080/auth/login', body, { headers: headers });
  }

  loadProfile(data: any): void {
    this.isAuth = true;
    this.accessToken = data['access_token'];
    const decodedJwt: any = jwtDecode(this.accessToken);
    this.username = decodedJwt.sub;
    this.roles = decodedJwt.scope;
    window.localStorage.setItem('jwt-token', this.accessToken);
  }

  logout(): void {
    this.isAuth = false;
    this.accessToken = undefined;
    this.username = undefined;
    this.roles = undefined;
    window.localStorage.removeItem('jwt-token');
    this.router.navigateByUrl('/login');
  }

  loadJwtTokenFromLocalStorage(): void {
    const token = window.localStorage.getItem('jwt-token');
    if (token) {
      this.loadProfile({ access_token: token });
      this.router.navigateByUrl(this.isAdmin() ? '/admin/home' : '/user/home');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
