package com.gestionEtudiant.ems.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;



@NoArgsConstructor
@Entity
@Table(name = "Etudiants" )
public class Etudiant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nom")
    private String nom;

    @CreationTimestamp
    @Column(name = "date_de_création", updatable = false)
    private LocalDateTime dateDeCreation;



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





}
