package com.gestionEtudiant.ems.repository;

import com.gestionEtudiant.ems.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository <Note,Long>{
}
