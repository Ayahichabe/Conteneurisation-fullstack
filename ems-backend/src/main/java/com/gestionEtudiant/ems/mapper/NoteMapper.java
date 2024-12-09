package com.gestionEtudiant.ems.mapper;

import com.gestionEtudiant.ems.dto.NoteDto;
import com.gestionEtudiant.ems.entity.Note;

public class NoteMapper {

    public static NoteDto mapToNoteDto(Note note) {
        return new NoteDto(
                note.getId(),
                note.getIdEtudiant(),
                note.getNomDuCours(),
                note.getValeurDeNote()
        );
    }

    public static Note mapToNote (NoteDto noteDto) {
        return new Note(
                noteDto.getId(),
                noteDto.getIdEtudiant(),
                noteDto.getNomDuCours(),
                noteDto.getValeurDeNote()
        );
    }
}
