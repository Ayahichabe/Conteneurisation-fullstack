package com.gestionEtudiant.ems.service.impl;

import com.gestionEtudiant.ems.dto.NoteDto;
import com.gestionEtudiant.ems.entity.Etudiant;
import com.gestionEtudiant.ems.entity.Note;
import com.gestionEtudiant.ems.exception.RessourceNotFoundException;
import com.gestionEtudiant.ems.mapper.EtudiantMapper;
import com.gestionEtudiant.ems.mapper.NoteMapper;
import com.gestionEtudiant.ems.repository.EtudiantRepository;
import com.gestionEtudiant.ems.repository.NoteRepository;
import com.gestionEtudiant.ems.service.NoteService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service

public class NoteServiceImpl implements NoteService {


    private final NoteRepository noteRepository;

    @Autowired
    public NoteServiceImpl(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @Override
    public NoteDto createNote(NoteDto noteDto) {

        Note note= NoteMapper.mapToNote(noteDto);
        Note savedNote = noteRepository.save(note);
        return NoteMapper.mapToNoteDto(savedNote);
    }

    @Override
    public NoteDto getNoteById(Long id) {
        Note note = noteRepository.findById(id)
                .orElseThrow(() -> new RessourceNotFoundException("La note avec l'ID " + id + " n'existe pas."));
        return NoteMapper.mapToNoteDto(note);
    }

    @Override
    public List<NoteDto> getAllNotes() {
        List<Note > notes  = noteRepository.findAll();
        return notes.stream().map((note -> NoteMapper.mapToNoteDto(note))).collect(Collectors.toList());

    }
}
