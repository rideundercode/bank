import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/Client'; // Chemin correct

@Injectable({
providedIn: 'root'
})
export class ClientService {
private apiUrl = 'http://localhost:8080/api/clients'; // URL de l'API

constructor(private http: HttpClient) { }

  // Créer un client
  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, client);
  }  

  // Récupérer tous les clients
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  // Récupérer un client par ID
  getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${id}`);
  }

  // Supprimer un client
  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
