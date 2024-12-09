package com.gestionEtudiant.ems.repository;

import com.gestionEtudiant.ems.entity.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {

}
