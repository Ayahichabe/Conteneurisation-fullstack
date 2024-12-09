package com.gestionEtudiant.ems.service;

import com.gestionEtudiant.ems.dto.EtudiantDto;
import com.gestionEtudiant.ems.dto.NoteDto;

import java.util.List;

public interface NoteService {
    NoteDto createNote(NoteDto noteDto);
    NoteDto getNoteById(Long id);
    List<NoteDto> getAllNotes();



}
