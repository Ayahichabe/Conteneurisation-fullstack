import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStudentNotes } from '../Sevices/StudentService';

function StudentDetails() {
    const { id } = useParams();
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [finalGrade, setFinalGrade] = useState("N/A");
    const navigate = useNavigate();

    useEffect(() => {
        getStudentNotes(id)
            .then((response) => {
                setNotes(response);
                setLoading(false);

                if (response && response.length > 0) {
                    const totalNotes = response.reduce((acc, note) => {
                        const valeur = parseFloat(note.valeurDeNote);
                        return !isNaN(valeur) ? acc + valeur : acc;
                    }, 0);
                    const moyenne = totalNotes / response.length;
                    setFinalGrade(moyenne.toFixed(2));
                } else {
                    setFinalGrade("N/A");
                }
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des notes:", error);
                setLoading(false);
            });
    }, [id]);

    const addNewMark = () => {
        console.log("Navigating with studentId:", id); // Log studentId to ensure it's correct
        navigate('/add-note', { state: { studentId: id } });
    };

    const goBack = () => {
        navigate('/students');
    };

    if (loading) {
        return <div>Chargement des notes...</div>;
    }

    return (
        <div className="container">
            <h2 className="text-center">Détails des notes</h2>
            <button className="btn btn-light mb-2" onClick={goBack}>🔙</button>
            <button className="btn btn-primary mb-2" onClick={addNewMark}>
                Ajouter une note
            </button>
            <table className="table  table-bordered">
                <thead>
                    <tr>
                        <th>Nom du cours</th>
                        <th>Note</th>
                    </tr>
                </thead>
                <tbody>
                    {notes.map((note) => {
                        const noteValue = parseFloat(note.valeurDeNote);
                        // Vérifie si la note est supérieure à 10 pour appliquer la couleur verte, sinon rouge
                        const rowClass = noteValue > 10 ? 'table-success' : 'table-danger';
                        return (
                            <tr key={note.id} className={rowClass}>
                                <td>{note.nomDuCours}</td>
                                <td>{note.valeurDeNote}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <h4>Note finale : {finalGrade}</h4>
        </div>
    );
}

export default StudentDetails;
