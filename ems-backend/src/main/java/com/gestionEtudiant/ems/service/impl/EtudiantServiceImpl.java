package com.gestionEtudiant.ems.service.impl;

import com.gestionEtudiant.ems.dto.EtudiantDto;
import com.gestionEtudiant.ems.entity.Etudiant;
import com.gestionEtudiant.ems.exception.RessourceNotFoundException;
import com.gestionEtudiant.ems.mapper.EtudiantMapper;
import com.gestionEtudiant.ems.repository.EtudiantRepository;
import com.gestionEtudiant.ems.service.EtudiantService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EtudiantServiceImpl implements EtudiantService {
    private final EtudiantRepository etudiantRepository;

    @Autowired
    public EtudiantServiceImpl(EtudiantRepository etudiantRepository) {
        this.etudiantRepository = etudiantRepository;
    }
    @Override
    public EtudiantDto createEtudiant(EtudiantDto etudiantDto) {

        Etudiant etudiant = EtudiantMapper.mapToEtudiant(etudiantDto);
        Etudiant savedEtudiant = etudiantRepository.save(etudiant);
        return EtudiantMapper.mapToEtudiantDto(savedEtudiant);
    }


    @Override
    public EtudiantDto getEtudiantById(Long id) {
        Etudiant etudiant = etudiantRepository.findById(id)
                .orElseThrow(() -> new RessourceNotFoundException("L'étudiant avec l'ID " + id + " n'existe pas."));
        return EtudiantMapper.mapToEtudiantDto(etudiant);
    }

    @Override
    public List<EtudiantDto> getAllEtudiants() {
        List<Etudiant > etudiants  = etudiantRepository.findAll();
        return etudiants.stream().map((etudiant -> EtudiantMapper.mapToEtudiantDto(etudiant))).collect(Collectors.toList());

    }

}
