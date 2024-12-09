import React,{useEffect, useState} from 'react'
import { ListStudents } from '../Sevices/StudentService';
import { useNavigate } from 'react-router-dom';

function ListStudent() {

  const [students , setStudents] = useState([])

  const navigator = useNavigate();

   useEffect(() => {
   ListStudents().then((response) =>{
      setStudents(response.data);
    }).catch(error =>{
      console.error(error);
    })

   },[])

   function addnewStudent(){
     navigator('/add-student')

   }

  

  return (
    <div className='container'>
        <h2 className='text-center'>Liste des étudiants</h2>
        <button className='btn btn-primary mb-2' onClick={addnewStudent}>Ajouter un étudiant</button>
        <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>Nom </th>
                <th>Date d'ajout</th>
                <th>Note finale</th>

              </tr>

            </thead>
            <tbody>
                {
                    students.map(student =>
                        <tr key ={student.id}>
                            <td>{student.nom}</td>
                            <td>
                    {student.dateDeCreation
                        ? new Date(student.dateDeCreation).toLocaleString('fr-FR', {
                              year: 'numeric',
                              month: '2-digit',
                              day: '2-digit',
                              hour: '2-digit',
                              minute: '2-digit',
                          })
                        : 'N/A'}
                </td>
                            <td>{student.finalNote}</td>

                        </tr>
                    )
                }
            </tbody>
           
        </table>

    </div>
  )
}

export default ListStudent