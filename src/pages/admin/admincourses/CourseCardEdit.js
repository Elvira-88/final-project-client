import { useForm } from "../../../hooks/useForm";
import { COURSES_URL } from "../../../config/config";
import { useAuthContext } from "../../../context/AuthContext";
import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

export default function CourseCardEdit({course}) {

    const formInitialState = {name: course.name, description: course.description, teacher_id: course.teacher_id, duration: course.duration, price: course.price};    
    const [form, handleChange] = useForm(formInitialState);

    const { getAuthHeaders } = useAuthContext(); 

    const history = useHistory();
     
    const handleSubmit = async e => {
        e.preventDefault();
        
        const options = {
            method: "PUT",
            headers: getAuthHeaders({"Content-type": "application/json"}),
            body: JSON.stringify(form)
        }

        
        const response = await fetch(COURSES_URL + "/" + course.id, options);
        // const data = await response.json();

        
        if(response.status >= 200 && response.status < 300) {   

            history.push("/admin-courses")
         
        } else {
            alert("No se pudo guardar");
        }

    }

        
    const handleDelete = async e => {
        e.preventDefault();
        
        const options = {
            method: "DELETE",
            headers: getAuthHeaders({"Content-type": "application/json"}),
           
        }
        
        const response = await fetch(COURSES_URL + "/" + course.id, options);
        // const data = await response.json();

        if(response.status >= 200 && response.status < 300) {  
            
            history.push("/admin-courses")
         
        } else {
            alert("No se pudo eliminar");
        }
       
    }

    const [teachers, setTeachers] = useState([]);

    const TEACHERS_URL = "http://localhost:8000/api/teachers";

    useEffect(() => {
        fetch(TEACHERS_URL)
        .then(response => response.json())
        .then(data=>setTeachers(data))      
    }, [])
    
    return (
        
        <div>
            <h3>Modificar un curso {form.name}</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="nameInput">Curso</label>
                    <input onChange={handleChange} value={form.name} name="name"/>
                </div>
                <div>
                    <label for="descriptionInput">Descripción</label>
                    <input onChange={handleChange} value={form.description} name="description"/>
                </div>
                <div>              
                    <select onChange={handleChange} value={form.teacher_id} name="teacher_id">
                    <option value="">Seleccione un profesor</option>
                    {teachers.map(teacher => {
                        return (
                            <option value={teacher.id}>{teacher.name} {teacher.lastName}</option>
                        )                        
                    })}
                    </select>                                 
                </div>
                <div>
                    <label for="durationInput">Duración</label>
                    <input onChange={handleChange} value={form.duration} name="duration"/>
                </div>
                <div>
                    <label for="priceInput">Precio</label>
                    <input onChange={handleChange} value={form.price} name="price"/>
                </div> 
                <button>Actualizar el curso</button>  
                <button onClick={handleDelete}>Eliminar</button>             
            </form>
        </div>
    )
}
