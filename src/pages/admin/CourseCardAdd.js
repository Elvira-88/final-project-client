import { useForm } from "../../hooks/useForm";
import { COURSES_URL } from "../../config/config";
import { useAuthContext } from "../../context/AuthContext";
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
            alert("No se pudo guardar");
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
            <h3>Añadir un nuevo curso</h3>
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
                <button>Añadir</button>            
            </form>
        </div>
    )
}