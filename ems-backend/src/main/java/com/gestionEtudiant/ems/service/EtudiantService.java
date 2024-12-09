package com.gestionEtudiant.ems.service;

import com.gestionEtudiant.ems.dto.EtudiantDto;

import java.util.List;

public interface EtudiantService {
    EtudiantDto createEtudiant(EtudiantDto etudiantDto);
    EtudiantDto getEtudiantById(Long id);
    List<EtudiantDto> getAllEtudiants();

}
