import { useForm } from "../../hooks/useForm";
import { COURSES_URL } from "../../config/config";
import { useAuthContext } from "../../context/AuthContext";

export default function CourseCardEdit({course}) {

    const formInitialState = {name: course.name, description: course.description, teacherName: course?.teacher?.name, teacherLastName: course?.teacher?.lastName, duration: course.duration, price: course.price};    
    const [form, handleChange] = useForm(formInitialState);

    const { getAuthHeaders } = useAuthContext(); 
     
    const handleSubmit = async e => {
        e.preventDefault();
        
        const options = {
            method: "PUT",
            headers: getAuthHeaders({"Content-type": "application/json"}),
            body: JSON.stringify(form)
        }

        const response = await fetch(COURSES_URL, options);
        const data = await response.json();

    }
      

    return (
        
        <div>
            <h3>Modificar un curso</h3>
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
                    <label for="teacherInput">Profesor</label>
                    <input onChange={handleChange} value={form.teacherName} name="teacherName"/>
                    <input onChange={handleChange} value={form.teacherLastName} name="teacherLastName"/>
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
            </form>
        </div>
    )
}
