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
     
    const handleSubmit = async e => {    //Se modifican todos los datos del curso con una petición PUT
        e.preventDefault();
        
        const options = {
            method: "PUT",
            headers: getAuthHeaders({"Content-type": "application/json"}),   //Solo se puede editar un curso si tienes el rol Admin
            body: JSON.stringify(form)
        }
        
        const response = await fetch(COURSES_URL + "/" + course.id, options);    //Llamada al Backend con el id del curso que vamos a editar
        
        if(response.status >= 200 && response.status < 300) {     //Si la respuesta es correcta redirigimos a cursos para comprobar los cambios  

            history.push("/admin-courses")
         
        } else {
            alert("No se pudo guardar");     //Si la respuesta no es correcta nos salta el alert para avisarnos y nos permite volver a editarlo correctamente
        }
    }
        
    const handleDelete = async e => {     //Petición al backend para eliminar un curso
        e.preventDefault();
        
        const options = {
            method: "DELETE",
            headers: getAuthHeaders({"Content-type": "application/json"}),     //Solo para usuarios autorizados con el rol Admin
           
        }
        
        const response = await fetch(COURSES_URL + "/" + course.id, options);      //La petición al Backend se realiza con el id del curso en concreto
       

        if(response.status >= 200 && response.status < 300) {    //Si la respuesta es afirmativa nos elimina el curso y nos redirige a cursos donde comprobaremos que ya no aparece
            
            history.push("/admin-courses")
         
        } else {
            alert("No se pudo eliminar");     //Si la respuesta es incorrecta el alert nos informa de que no se pudo eliminar
        }
       
    }

    const [teachers, setTeachers] = useState([]);

    const TEACHERS_URL = "http://localhost:8000/api/teachers";     //Petición a la API para obtener todos los profesores de la base de datos para el select del formulario

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
          
            <form onSubmit={handleSubmit} className="formCourse">    {/*Formulario para editar un curso con sus propiedades*/}
                <div className="editContent">
                    <div className="labelEditCourse"><label>Nombre: </label></div>
                    <div className="inputEditCourse"><input onChange={handleChange} value={form.name} name="name"/></div>                    
                </div>
                <div className="editContent">
                    <div className="labelEditCourse"><label>Descripción: </label></div>
                    <div className="inputEditCourse"><textarea name="description" cols="30" rows="10" onChange={handleChange} value={form.description}></textarea></div>               
                </div>
                <div className="editContent">  
                    <div className="labelEditCourse"><label>Profesor: </label></div>            
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
                    <div className="labelEditCourse"><label>Duración: </label></div>
                    <div className="inputEditCourse"><input onChange={handleChange} value={form.duration} name="duration"/></div>                    
                    
                </div>
                <div className="editContent">
                    <div className="labelEditCourse"><label>Precio: </label></div>
                    <div className="inputEditCourse"><input onChange={handleChange} value={form.price} name="price"/></div>              
                
                </div> 
                <button>Actualizar el curso</button>  
                <button onClick={handleDelete}>Eliminar</button>             
            </form>
        </div>
    )
}
