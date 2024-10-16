import { Component, OnInit } from '@angular/core';
import { CompteService } from '../service/compte.service';
import { Compte } from '../model/Compte';

@Component({
    selector: 'app-comptes',
    templateUrl: './comptes.component.html',
    styleUrls: ['./comptes.component.css']
})
export class ComptesComponent implements OnInit {
    comptes: Compte[] = [];
    compte: Compte = { id: 0, numeroCompte: '', solde: 0, clientId: 0 }; // Assurez-vous d'initialiser clientId ici

    constructor(private compteService: CompteService) { }

    ngOnInit(): void {
        this.loadComptes();
    }

    loadComptes(): void {
        this.compteService.getComptes().subscribe(data => {
            this.comptes = data;
        });
    }

    createCompte(): void {
        this.compteService.createCompte(this.compte).subscribe(() => {
            this.loadComptes();
            this.compte = { id: 0, numeroCompte: '', solde: 0, clientId: 0 }; // Réinitialisez le formulaire
        });
    }

    deleteCompte(id: number): void {
        this.compteService.deleteCompte(id).subscribe(() => {
            this.loadComptes();
        });
    }
}
