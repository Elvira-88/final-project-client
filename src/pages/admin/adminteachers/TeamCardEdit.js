import { useForm } from "../../../hooks/useForm";
import { TEACHERS_URL } from "../../../config/config";
import { useAuthContext } from "../../../context/AuthContext";
import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import "./adminteachers.css";

export default function TeamCardEdit({teacher}) {

    const formInitialState = {name: teacher.name, lastName: teacher.lastName, description: teacher.description, course_id: teacher.course_id};    
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

        const response = await fetch(TEACHERS_URL + "/" + teacher.id, options);
        // const data = await response.json();
        if(response.status >= 200 && response.status < 300) {   

            history.push("/admin-teachers")
         
        } else {
            alert("No se pudo modificar");
        }

    }

    const handleDelete = async e => {
        e.preventDefault();
        
        const options = {
            method: "DELETE",
            headers: getAuthHeaders({"Content-type": "application/json"}),
           
        }
        console.log(teacher.id);
        const response = await fetch(TEACHERS_URL + "/" + teacher.id, options);
        // const data = await response.json();

        if(response.status >= 200 && response.status < 300) {  
            
            history.push("/admin-teachers")
         
        } else {
            alert("No se pudo eliminar");
        }
    }

    const [courses, setCourses] = useState([]);

    const COURSES_URL = "http://localhost:8000/api/courses";

    useEffect(() => {
        fetch(COURSES_URL)
        .then(response => response.json())
        .then(data=>setCourses(data))
    }, [])


    return (
    <div className="editATeacher">
        <div className="titleTeacherEdit">
            <h3>Modifica los datos del siguiente profesor</h3>
        </div>
       
        <form onSubmit={handleSubmit} className="formTeacher">
            {/* <div>
                <label for="avatarInput">Foto</label>
                <input onChange={handleImgUpload} name="avatar" type="file" id="avatar" accept="png jpg jpeg"/>
            </div> */}
            <div className="editContentTeacher">
                <div className="labelEditTeacher"><label>Nombre: </label></div>
                <div className="inputEditTeacher"><input onChange={handleChange} value={form.name} name="name"/></div>                
            </div>
            <div className="editContentTeacher">
                <div className="labelEditTeacher"><label>Apellidos: </label></div>
                <div className="inputEditTeacher"><input onChange={handleChange} value={form.lastName} name="lastName"/></div>
            </div>
            <div className="editContentTeacher">
                <div className="labelEditTeacher"><label>Descripción: </label></div>                
                <div className="inputEditTeacher"><textarea name="description" cols="30" rows="10" onChange={handleChange} value={form.description}></textarea></div>                    
            </div>
            <div className="editContentTeacher">
                <div className="labelEditTeacher"><label>Curso: </label></div>
                <select onChange={handleChange} value={form.course_id} name="course_id">
                    <option value="">Selecciona un curso</option>
                    {courses.map(course => {
                        return (
                            <option value={course.id}>{course.name}</option>
                        )                        
                    })}
                </select> 
            </div>   
            <button>Actualizar los datos</button>
            <button onClick={handleDelete}>Eliminar</button>
           
        </form>
    </div>
    
    )
}
