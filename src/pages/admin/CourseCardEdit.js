import { useForm } from "../../hooks/useForm";
import { COURSES_URL } from "../../config/config";

export default function CourseCardEdit({course}) {
    const formInitialState = {name: course.name, description: course.description, teacherName: course?.teacher?.name, tacherLastName: course?.teacher?.lastName, duartion: course.duration, price: course.price};    
    const [form, handleChange] = useForm(formInitialState);
 
    const handleSubmit = async e => {
        e.preventDefault();
        
        const options = {
            method: "PUT",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(COURSES_URL, options);
        const data = await response.json();

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="nameInput">Curso</label>
                    <input onChange={handleChange} value={form.name} name="name"/>
                </div>
                <div>
                    <label for="nameInput">Descripción</label>
                    <input onChange={handleChange} value={form.description} name="description"/>
                </div>
                <div>
                    <label for="teacherInput">Profesor</label>
                    <input onChange={handleChange} value={form.teacherName} name="teacherName"/>
                    <input onChange={handleChange} value={form.teacherLastName} name="teacherLastName"/>
                </div>
                <div>
                    <label for="nameInput">Duración</label>
                    <input onChange={handleChange} value={form.duration} name="duration"/>
                </div>
                <div>
                    <label for="nameInput">Precio</label>
                    <input onChange={handleChange} value={form.price} name="price"/>
                </div>
               
            </form>
        </div>
    )
}