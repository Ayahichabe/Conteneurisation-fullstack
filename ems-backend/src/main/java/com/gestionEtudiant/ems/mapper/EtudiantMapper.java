package com.gestionEtudiant.ems.mapper;

import com.gestionEtudiant.ems.dto.EtudiantDto;
import com.gestionEtudiant.ems.entity.Etudiant;

public class EtudiantMapper {

    public static EtudiantDto mapToEtudiantDto(Etudiant etudiant) {
        return new EtudiantDto(
                etudiant.getId(),
                etudiant.getNom(),
                etudiant.getDateDeCreation()

        );
    }

    public static Etudiant mapToEtudiant(EtudiantDto etudiantDto) {
        Etudiant etudiant = new Etudiant();
        etudiant.setNom(etudiantDto.getNom());
        // La dateDeCreation sera générée par la base de données automatiquement.
        return etudiant;
    }

}
