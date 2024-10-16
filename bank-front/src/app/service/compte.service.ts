import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from '../model/Compte';

@Injectable({
    providedIn: 'root'
})
export class CompteService {
    private apiUrl = 'http://localhost:8080/api/comptes';

    constructor(private http: HttpClient) { }

    createCompte(compte: Compte): Observable<Compte> {
        return this.http.post<Compte>(this.apiUrl, compte);
    }

    getComptes(): Observable<Compte[]> {
        return this.http.get<Compte[]>(this.apiUrl);
    }

    deleteCompte(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
