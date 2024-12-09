import React, { useState } from 'react'
import { createStudent } from '../Sevices/StudentService';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {

     const [name , setName] = useState('')

     const [errors , setErrors] = useState({ name:''})

     const navigator = useNavigate()

     function handlename(e){
        setName(e.target.value);
     }

     function saveStudent(e){
        e.preventDefault();

        if(validateForm()){
            const student = {
                nom: name, 
            }; 
            console.log(student)
    
            createStudent(student).then((response) =>{
                console.log(response.data);
                navigator('/students')
            })

        }
      
     }

     function validateForm(){
        let valid = true ;
        const errorsCopy = {... errors}
        if(name.trim()){
            errorsCopy.name = '';
        }else{
            errorsCopy.name="Le nom est requis";
            valid = false;
        }
        setErrors(errorsCopy);
        return valid;
     }

  return (
    <div className='container'>
        <br /> <br /><br /><br /><br /><br /> <br /><br /><br /><br />

        <div className='row'>
            <div className='card col-md-4 offset-md-2 offset-md-4'>
                <h2 className='text-center'>Ajout d'un étudiant</h2>
                <div className='card-body'>
                    <form >
                        <div className='form-group mb-2'>
                            <label className='form-label'>Nom</label>
                            <input 
                            type="text"  
                            placeholder='Entrer le nom de l`étudiant'
                            name='nom'
                            value={name}
                            className={`form-control ${errors.name ? 'is-invalid': '' }`}
                            onChange={handlename}
                            />
                            {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                        </div>
                        <button className='btn btn-success' onClick={saveStudent}>Ajouter</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddStudent