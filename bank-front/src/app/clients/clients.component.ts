import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/clients.service';
import { Client } from '../model/Client';
@Component({
selector: 'app-clients',
templateUrl: './clients.component.html',
styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
clients: Client[] = [];
client: Client = { id: 0, nom: '', email: '' }; // Assurez-vous que ce modèle est bien défini dans client.model.ts

constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.getClients().subscribe(data => {
      console.log('Clients data:', data); // Ajoute ceci pour déboguer
      this.clients = data;
    }, error => {
      console.error('Erreur lors de la récupération des clients:', error); // Ajoute ceci pour capturer les erreurs
    });
  }

  createClient(client: Client): void {
    this.clientService.createClient(client).subscribe(() => {
      this.loadClients();
      this.client = { id: 0, nom: '', email: '' }; // Réinitialiser le formulaire après la création
    });
  }

  deleteClient(id: number): void {
    this.clientService.deleteClient(id).subscribe(() => {
      this.loadClients();
    });
  }
}
