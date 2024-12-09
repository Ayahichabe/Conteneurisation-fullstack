import React, { useEffect, useState } from 'react';
import { ListStudents } from '../Sevices/StudentService';
import { useNavigate } from 'react-router-dom';


function ListStudent() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  // Récupérer les étudiants au chargement du composant
  useEffect(() => {
    ListStudents()
      .then((response) => {
        setStudents(response.data); // On suppose que response.data contient la liste des étudiants avec leurs notes
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  const addNewStudent = () => {
    navigate("/add-student");
  };

  // Fonction pour calculer la note finale pour un étudiant
  const calculateFinalGrade = (student) => {
    if (student && student.notes && student.notes.length > 0) {
      const totalNotes = student.notes.reduce((acc, note) => acc + parseFloat(note.valeurDeNote), 0);
      const average = totalNotes / student.notes.length;
      return average.toFixed(2); // Affichage de la moyenne arrondie
    }
    return "N/A"; // Si l'étudiant n'a pas de notes
  };

  return (
    <div className="container">
      <h2 className="text-center">Liste des étudiants</h2>
      <button className="btn btn-primary mb-2" onClick={addNewStudent}>
        Ajouter un étudiant
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Date d'ajout</th>
            <th>Note finale</th> {/* Colonne pour afficher la note finale */}
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td
  style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
  onClick={() => navigate(`/students/${student.id}`)} // Passe l'ID de l'étudiant
>
  {student.nom}
</td>

              <td>
                {student.dateDeCreation
                  ? new Date(student.dateDeCreation).toLocaleString("fr-FR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "N/A"}
              </td>
              <td>{calculateFinalGrade(student)}</td> {/* Calcul et affichage de la note finale */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListStudent;
