export interface Compte {
  id: number;
  numeroCompte: string;
  solde: number;
  clientId: number; // Référence à l'ID du client
}
