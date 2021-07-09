import { useForm } from "../../hooks/useForm";
import { COURSES_URL } from "../../config/config";
import { useAuthContext } from "../../context/AuthContext";
import {useState, useEffect} from "react";

export default function CourseCardAdd({course}) {

    const formInitialState = {name: "", description: "", teacher: "", duration: "", price: ""};    
    const [form, handleChange] = useForm(formInitialState);

    const { getAuthHeaders } = useAuthContext();

    const handleSubmit = async e => {
        e.preventDefault();
        
        const options = {
            method: "POST",
            headers: getAuthHeaders({"Content-type": "application/json"}),
            body: JSON.stringify(form)
        }

        const response = await fetch(COURSES_URL, options);
        const data = await response.json();
        
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

            {/* <select name="teacher">
                        <option value={teacher.name}></option>
            </select> */}
                  
                <div>
                    <label for="nameInput">Curso</label>
                    <input onChange={handleChange} value={form.name} name="name"/>
                </div>
                <div>
                    <label for="descriptionInput">Descripción</label>
                    <input onChange={handleChange} value={form.description} name="description"/>
                </div>
                <div>
                    {/* <label for="teacherInput">Profesor</label>
                    <input onChange={handleChange} value={form.teacherName} name="teacherName"/>
                    <input onChange={handleChange} value={form.teacherLastName} name="teacherLastName"/> */}                 
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