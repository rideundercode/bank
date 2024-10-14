# Projet Banque

Ce projet est une application bancaire développée en Java avec Spring Boot. Elle permet de gérer des clients et des comptes, offrant des opérations de création, de récupération, de mise à jour et de suppression.

## Fonctionnalités

- **Gestion des Clients** :
    - Créer un client
    - Récupérer tous les clients
    - Récupérer un client par ID
    - Supprimer un client

- **Gestion des Comptes** :
    - Créer un compte (lié à un client)
    - Récupérer tous les comptes
    - Récupérer un compte par ID
    - Supprimer un compte

## Technologies Utilisées

- **Langage** : Java 17
- **Framework** : Spring Boot
- **Base de données** : H2 (ou autre selon la configuration)
- **Outils** : Maven, Postman

## Installation

1. **Clonez le dépôt** :
   ```bash
   git clone https://github.com/rideundercode/bank.git
   cd bank
   mvn clean install
   mvn spring-boot:run               

## Utilisation de l'API :

- **Creer un Client** 
    - URL : http://localhost:8080/api/clients
  - Méthode : POST
  - Body (JSON) :
{
"nom": "John Doe",
"email": "john.doe@example.com"
}

- **Créer un Compte** :
  - URL : http://localhost:8080/api/comptes
  - Méthode : POST
  - Body (JSON) :
{
"numeroCompte": "FR7630004000031234567890185",
"solde": 1500.0,
"clientId": 1  // ID du client créé précédemment
}


- **Récupérer tous les Clients** :
  - URL : http://localhost:8080/api/clients
  - Méthode : GET
  

- **Récupérer un Client par ID** :
    - URL : http://localhost:8080/api/clients/{id}
    - Méthode : GET


- **Supprimer un Client** :
    - URL : http://localhost:8080/api/clients/{id}
    - Méthode : DELETE


Pour créer un compte il faut créer un utilisateur