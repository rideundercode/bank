package com.back.bank.controllers;

import com.back.bank.models.Compte;
import com.back.bank.services.CompteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comptes")
@CrossOrigin(origins = "http://localhost:4200") // Autoriser l'origine du frontend
public class CompteController {

    @Autowired
    private CompteService compteService;

    // Récupérer tous les comptes
    @GetMapping
    public List<Compte> getAllComptes() {
        return compteService.getAllComptes();
    }

    // Récupérer un compte par son ID
    @GetMapping("/{id}")
    public Compte getCompteById(@PathVariable Long id) {
        return compteService.getCompteById(id);
    }

    // Créer un nouveau compte
    @PostMapping
    public Compte createCompte(@RequestBody Compte compte) {
        return compteService.createCompte(compte);
    }

    // Supprimer un compte par son ID
    @DeleteMapping("/{id}")
    public void deleteCompte(@PathVariable Long id) {
        compteService.deleteCompte(id);
    }
}
