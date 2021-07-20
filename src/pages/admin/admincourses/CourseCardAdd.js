import { useForm } from "../../../hooks/useForm";
import { COURSES_URL } from "../../../config/config";
import { useAuthContext } from "../../../context/AuthContext";
import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

export default function CourseCardAdd({}) {

    const formInitialState = {name: "", description: "", teacher_id: "", duration: "", price: ""};    
    const [form, handleChange] = useForm(formInitialState);

    const { getAuthHeaders } = useAuthContext();

    const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();
        
        const options = {
            method: "POST",
            headers: getAuthHeaders({"Content-type": "application/json"}),
            body: JSON.stringify(form)
        }

        const response = await fetch(COURSES_URL, options);
        
        if(response.status >= 200 && response.status < 300) {   

            history.push("/admin-courses")
         
        } else {
            alert("No se pudo añadir");
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
        <div className="addCourse">
            <div className="titleCourseAdd"><h2>Añade un nuevo curso</h2></div>
            <form onSubmit={handleSubmit} className="formAddCourse">                       
                
                <div className="addContent">
                    <div className="labelAddCourse"><label>Curso: </label></div>
                    <div className="inputAddCourse"><input onChange={handleChange} value={form.name} name="name"/></div>             
              
                </div>
                <div className="addContent">
                    <div className="labelAddCourse"><label>Descripción: </label></div>
                    <div className="inputAddCourse"><textarea name="description" cols="30" rows="10" onChange={handleChange} value={form.description}></textarea></div>                
                </div>
                <div className="addContent">
                <div className="labelAddCourse"><label>Profesor: </label></div>
                    <select onChange={handleChange} value={form.teacher_id} name="teacher_id">
                        <option value="">Seleccione un profesor</option>
                        {teachers.map(teacher => {
                            return (
                                <option value={teacher.id}>{teacher.name} {teacher.lastName}</option>
                            )                        
                        })}
                    </select>       
                </div>
                <div className="addContent">
                    <div className="labelAddCourse"><label>Duración: </label></div>
                    <div className="inputAddCourse"><input onChange={handleChange} value={form.duration} name="duration"/></div>
                </div>   
                    
                <div className="addContent">
                    <div className="labelAddCourse"><label>Precio: </label></div>
                    <div className="inputAddCourse"><input onChange={handleChange} value={form.price} name="price"/></div>
                </div>   
                <button>Añadir</button>            
            </form>
        </div>
    )
}