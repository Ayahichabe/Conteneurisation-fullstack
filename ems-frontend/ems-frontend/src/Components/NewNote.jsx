import React, { useState } from 'react';
import { createNote } from '../Sevices/StudentService'; // Assurez-vous que cette fonction existe
import { useNavigate, useLocation } from 'react-router-dom';

const NewNote = () => {
  const [courseName, setCourseName] = useState('');
  const [grade, setGrade] = useState('');
  const [errors, setErrors] = useState({ courseName: '', grade: '' });
  const navigate = useNavigate();
  const location = useLocation();
  
  // Récupérer l'ID de l'étudiant passé via location.state
  const { studentId, refreshNotes } = location.state || {};
  console.log("Received studentId:", studentId); // Log the received studentId
  
  const validateForm = () => {
    let valid = true;
    const errorsCopy = { ...errors };

    if (!courseName.trim()) {
      errorsCopy.courseName = 'Le nom du cours est requis';
      valid = false;
    } else {
      errorsCopy.courseName = '';
    }

    if (!grade.trim() || isNaN(grade) || grade < 0 || grade > 20) {
      errorsCopy.grade = 'Veuillez entrer une note valide entre 0 et 20';
      valid = false;
    } else {
      errorsCopy.grade = '';
    }

    setErrors(errorsCopy);
    return valid;
  };

  const saveNote = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const note2 = { 
        idEtudiant: studentId,  // Use idEtudiant instead of id_étudiant
        nomDuCours: courseName, 
        valeurDeNote: Number(grade)
      };
      
      
      createNote(note2)
        .then((response) => {
          console.log('Note ajoutée:', response.data);
          if (refreshNotes) {
            refreshNotes(); // Rafraîchir la liste des notes dans StudentDetails si nécessaire
          }
          navigate(`/students/${studentId}`); // Rediriger vers la page de détails de l'étudiant
        })
        .catch((error) => {
          if (error.response) {
            console.error('Erreur de requête:', error.response.data);
          } else {
            console.error('Erreur inconnue:', error);
          }
        });
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Ajouter une nouvelle note</h2>
      <form onSubmit={saveNote}>
        <div className="form-group mb-2">
          <label className="form-label">Nom du cours</label>
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className={`form-control ${errors.courseName ? 'is-invalid' : ''}`}
          />
          {errors.courseName && <div className="invalid-feedback">{errors.courseName}</div>}
        </div>
        <div className="form-group mb-2">
          <label className="form-label">Note</label>
          <input
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className={`form-control ${errors.grade ? 'is-invalid' : ''}`}
          />
          {errors.grade && <div className="invalid-feedback">{errors.grade}</div>}
        </div>
        <button type="submit" className="btn btn-success">
          Ajouter la note
        </button>
      </form>
    </div>
  );
};

export default NewNote;
