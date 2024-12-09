import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/etudiants';

export const ListStudents = () => axios.get(REST_API_BASE_URL);

export const createStudent = (student) => axios.post(REST_API_BASE_URL, student);

export const getStudentNotes = (id) => {
  return axios.get('http://localhost:8080/api/notes')
    .then((response) => {
      // Filtrer les notes pour l'étudiant spécifique
      return response.data.filter(note => note.idEtudiant === parseInt(id));
    });
};

export const createNote = (note) => axios.post('http://localhost:8080/api/notes', note);
