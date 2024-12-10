import React, { useEffect, useState } from 'react';
import { ListStudents } from  '../Sevices/StudentService'; 
import { getStudentNotes } from  '../Sevices/StudentService'; 
import { useNavigate } from 'react-router-dom';

function ListStudent() {
  const [students, setStudents] = useState([]);  
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    ListStudents()
      .then((response) => {
        console.log("Liste des étudiants : ", response.data);
        const studentData = response.data;
        const studentsWithNotesPromises = studentData.map((student) => 
          getStudentNotes(student.id)
            .then((notesResponse) => {
              student.notes = notesResponse.data;
              return student;
            })
        );
        
        Promise.all(studentsWithNotesPromises)
          .then((studentsWithNotes) => {
            setStudents(studentsWithNotes);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Erreur lors de la récupération des notes:", error);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des étudiants:", error);
        setLoading(false);
      });
  }, []);

  const addNewStudent = () => {
    navigate("/add-student");
  };

  const calculateFinalGrade = (student) => {
    if (student && student.notes && student.notes.length > 0) {
      const totalNotes = student.notes.reduce((acc, note) => acc + parseFloat(note.valeurDeNote), 0);
      const average = totalNotes / student.notes.length;
      return average.toFixed(2);
    }
    return "N/A";
  };
  
  if (loading) {
    return <div>Chargement des étudiants et de leurs notes...</div>;
  }

  return (
    <div className="container">
      <h2 className="text-center">Liste des étudiants</h2>
      <button className="btn btn-primary mb-2" onClick={addNewStudent}>
        Ajouter un étudiant
      </button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Date d'ajout</th>
            <th>Note finale</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            const finalGrade = calculateFinalGrade(student);
            const rowStyle = finalGrade > 10
              ? { backgroundColor: '#d4edda' } // Vert
              : { backgroundColor: '#f8d7da' }; // Rouge

            return (
              <tr key={student.id} style={rowStyle}>
                <td
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={() => navigate(`/students/${student.id}`)}
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
                <td>{finalGrade}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListStudent;
