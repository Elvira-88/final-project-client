import { useForm } from "../../../hooks/useForm";
import { COURSES_URL } from "../../../config/config";
import { useAuthContext } from "../../../context/AuthContext";
import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import "./admincourses.css";

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
        
        <div className="editACourse">
            <div className="titleCourseEdit">
                <h2>Edita el curso</h2>
                <h3 className="nameCourseEdit">{form.name}</h3>
            </div>
          
            <form onSubmit={handleSubmit} className="formCourse">
                <div className="editContent">
                    <div className="labelEditCourse"><label for="nameInput">Nombre: </label></div>
                    <div className="inputEditCourse"><input onChange={handleChange} value={form.name} name="name"/></div>                    
                </div>
                <div className="editContent">
                    <div className="labelEditCourse"><label for="descriptionInput">Descripción: </label></div>
                    <div className="inputEditCourse"><textarea name="description" cols="30" rows="10" onChange={handleChange} value={form.description}></textarea></div>               
                </div>
                <div className="editContent">  
                    <div className="labelEditCourse"><label for="nameInput">Profesor: </label></div>            
                    <select onChange={handleChange} value={form.teacher_id} name="teacher_id">
                    <option value="">Selecciona un profesor</option>
                    {teachers.map(teacher => {
                        return (
                            <option value={teacher.id}>{teacher.name} {teacher.lastName}</option>
                        )                        
                    })}
                    </select>                                 
                </div>
                <div className="editContent">
                    <div className="labelEditCourse"><label for="durationInput">Duración: </label></div>
                    <div className="inputEditCourse"><input onChange={handleChange} value={form.duration} name="duration"/></div>                    
                    
                </div>
                <div className="editContent">
                    <div className="labelEditCourse"><label for="priceInput">Precio: </label></div>
                    <div className="inputEditCourse"><input onChange={handleChange} value={form.price} name="price"/></div>              
                
                </div> 
                <button>Actualizar el curso</button>  
                <button onClick={handleDelete}>Eliminar</button>             
            </form>
        </div>
    )
}
