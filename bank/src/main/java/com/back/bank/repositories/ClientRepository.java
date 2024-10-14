package com.back.bank.repositories;

import com.back.bank.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
    // Vous pouvez ajouter des méthodes de recherche personnalisées ici si nécessaire
}
