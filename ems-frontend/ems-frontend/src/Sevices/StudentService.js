import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/etudiants';

export const ListStudents = () => axios.get(REST_API_BASE_URL);

export const createStudent = (student) => axios.post(REST_API_BASE_URL , student);
