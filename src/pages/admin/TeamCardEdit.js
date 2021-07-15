import { useForm } from "../../hooks/useForm";
import { TEACHERS_URL } from "../../config/config";
import { useAuthContext } from "../../context/AuthContext";
import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

export default function TeacherCardEdit({teacher}) {

    const formInitialState = {name: teacher.name, lastName: teacher.lastName, description: teacher.description, course_id: teacher?.course_id};    
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
    <div>
            <h3>Modificación de algún dato de un profesor</h3>
        <form onSubmit={handleSubmit}>
            {/* <div>
                <label for="avatarInput">Foto</label>
                <input onChange={handleImgUpload} name="avatar" type="file" id="avatar" accept="png jpg jpeg"/>
            </div> */}
            <div>
                <label for="nameInput">Nombre</label>
                <input onChange={handleChange} value={form.name} name="name"/>
            </div>
            <div>
                <label for="lastNameInput">Apellidos</label>
                <input onChange={handleChange} value={form.lastName} name="lastName"/>
            </div>
            <div>
                <label for="descriptionInput">Descripción</label>
                <input onChange={handleChange} value={form.description} name="description"/>                    
            </div>
            <div>
                <select onChange={handleChange} value={form.course_id} name="course_id">
                    <option value="">Seleccione un curso</option>
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
