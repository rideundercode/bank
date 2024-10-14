package com.back.bank.repositories;

import com.back.bank.models.Compte;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompteRepository extends JpaRepository<Compte, Long> {
    // Vous pouvez ajouter des méthodes de recherche personnalisées ici si nécessaire
}
