package com.back.bank.services;

import com.back.bank.models.Compte;
import com.back.bank.repositories.CompteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompteService {

    @Autowired
    private CompteRepository compteRepository;

    // Récupérer tous les comptes
    public List<Compte> getAllComptes() {
        return compteRepository.findAll();
    }

    // Récupérer un compte par son ID
    public Compte getCompteById(Long id) {
        return compteRepository.findById(id).orElse(null);
    }

    // Créer un nouveau compte
    public Compte createCompte(Compte compte) {
        return compteRepository.save(compte);
    }

    // Supprimer un compte par son ID
    public void deleteCompte(Long id) {
        compteRepository.deleteById(id);
    }
}
