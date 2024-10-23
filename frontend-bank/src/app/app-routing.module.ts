import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { CustomersComponent } from './customers/customers.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthorizationGuard } from './guards/authorization.guard';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilComponent } from './profil/profil.component';
import { TemplateComponent } from './template/template.component';
import { CustomerAccountsComponent } from './customer-accounts/customer-accounts.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Route pour la page de connexion
  {
    path: 'admin',
    component: TemplateComponent, // Template pour les pages administratives
    canActivate: [AuthenticationGuard, AuthorizationGuard], // Gardiens pour protéger les routes
    children: [
      { path: 'accounts', component: AccountsComponent }, // Liste des comptes
      { path: 'account/:id', component: AccountsComponent }, // Détails d'un compte spécifique
      { path: 'accountsList', component: CustomerAccountsComponent }, // Liste des comptes clients
      { path: 'profile', component: ProfilComponent }, // Profil de l'utilisateur
      { path: 'dashboard', component: DashboardComponent }, // Tableau de bord
      { path: 'customers', component: CustomersComponent }, // Liste des clients
      { path: 'new-customer', component: NewCustomerComponent }, // Ajouter un nouveau client
      { path: 'edit-customer/:id', component: EditCustomerComponent }, // Éditer un client existant
      { path: 'home', component: HomeComponent }, // Page d'accueil
    ]
  },
  {
    path: 'user',
    component: TemplateComponent, // Template pour les pages utilisateur
    children: [
      { path: 'home', component: HomeComponent }, // Page d'accueil utilisateur
      { path: 'profile', component: ProfilComponent } // Profil de l'utilisateur
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importation des routes
  exports: [RouterModule] // Exportation du module de routage
})
export class AppRoutingModule { }
