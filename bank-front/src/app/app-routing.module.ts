import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ComptesComponent } from './comptes/comptes.component';

const routes: Routes = [
{ path: 'clients', component: ClientsComponent }, // Route pour le composant Clients
{ path: 'comptes', component: ComptesComponent }, // Route pour le composant Comptes
{ path: '', redirectTo: '/clients', pathMatch: 'full' } // Redirection vers Clients par défaut
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
