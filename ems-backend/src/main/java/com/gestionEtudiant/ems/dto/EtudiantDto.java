package com.gestionEtudiant.ems.dto;



import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@NoArgsConstructor

public class EtudiantDto {

    private Long id;
    private String nom;
    private LocalDateTime dateDeCreation;

    public EtudiantDto(Long id, String nom, LocalDateTime dateDeCreation) {
        this.id = id;
        this.nom = nom;
        this.dateDeCreation = dateDeCreation;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public LocalDateTime getDateDeCreation() {
        return dateDeCreation;
    }

    public void setDateDeCreation(LocalDateTime dateDeCreation) {
        this.dateDeCreation = dateDeCreation;
    }



}
