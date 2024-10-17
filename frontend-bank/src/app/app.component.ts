import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Correction de styleUrl à styleUrls
})
export class AppComponent implements OnInit {
  title = 'frontend-bank'; // Titre de l'application

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loadJwtTokenFromLocalStorage(); // Chargement du token JWT depuis le stockage local
  }
}
