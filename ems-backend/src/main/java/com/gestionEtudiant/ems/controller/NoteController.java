package com.gestionEtudiant.ems.controller;


import com.gestionEtudiant.ems.dto.EtudiantDto;
import com.gestionEtudiant.ems.dto.NoteDto;
import com.gestionEtudiant.ems.service.NoteService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/notes")
public class NoteController {

    @Autowired
    private NoteService noteService;

    //Build Add Note Rest Api
    @PostMapping
    public ResponseEntity<NoteDto> createNote(@RequestBody NoteDto noteDto) {
        NoteDto savedNote = noteService.createNote(noteDto);
        return new ResponseEntity<>(savedNote , HttpStatus.CREATED);
    }

    //Build Get Note Rest Api
    @GetMapping("{id}")
    public ResponseEntity<NoteDto> getNoteById(@PathVariable("id") Long id) {
        NoteDto noteDto = noteService.getNoteById(id);
        return ResponseEntity.ok(noteDto);
    }

    //Build Get All Note Rest Api
    @GetMapping
    public ResponseEntity<List<NoteDto>> getAllNotes() {
        List<NoteDto> notes = noteService.getAllNotes();
        return ResponseEntity.ok(notes);

    }
}
