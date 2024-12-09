package com.gestionEtudiant.ems.controller;


import com.fasterxml.jackson.annotation.JacksonInject;
import com.gestionEtudiant.ems.dto.EtudiantDto;
import com.gestionEtudiant.ems.service.EtudiantService;
import jakarta.websocket.server.PathParam;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/etudiants")
public class EtudiantController {

    @Autowired
    private EtudiantService etudiantService;


    //Build Add Etudiant Rest Api
    @PostMapping
    public ResponseEntity<EtudiantDto> createEtudiant(@RequestBody EtudiantDto etudiantDto) {
        EtudiantDto savedEtudiant = etudiantService.createEtudiant(etudiantDto);
        return new ResponseEntity<>(savedEtudiant, HttpStatus.CREATED);
    }

    //Build Get Etudiant Rest Api
    @GetMapping("{id}")
    public ResponseEntity<EtudiantDto> getEtudiantById(@PathVariable("id") Long id) {
        EtudiantDto etudiantDto = etudiantService.getEtudiantById(id);
        return ResponseEntity.ok(etudiantDto);
    }

    //Build Get All Etudiant Rest Api
    @GetMapping
    public ResponseEntity<List<EtudiantDto>> getAllEtudiants() {
        List<EtudiantDto> etudiants = etudiantService.getAllEtudiants();
        return ResponseEntity.ok(etudiants);

    }
}
