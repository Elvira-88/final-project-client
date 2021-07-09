import { useForm } from "../../hooks/useForm";
import { TEACHERS_URL } from "../../config/config";

export default function TeacherCardEdit({teacher}) {

    const formInitialState = {name: teacher.name, lastName: teacher.lastName, description: teacher.description};    
    const [form, handleChange] = useForm(formInitialState);

    const handleSubmit = async e => {
        e.preventDefault();
        
        const options = {
            method: "PUT",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(TEACHERS_URL, options);
        const data = await response.json();

    }

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
                <label for="courseInput">Curso</label>
                <input onChange={handleChange} value={form.course} name="course"/>
            </div>   
            <button>Actualizar los datos</button>
           
        </form>
    </div>
    
    )
}
