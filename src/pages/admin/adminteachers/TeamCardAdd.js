import { useForm } from "../../../hooks/useForm";
import {useState, useEffect} from "react";
import { TEACHERS_URL } from "../../../config/config";
import { useAuthContext } from "../../../context/AuthContext";
import {useHistory} from "react-router-dom";

export default function TeamCardAdd({teacher}) {

    const formInitialState = {name: "", lastName: "", description: "", course_id: ""};    
    const [form, handleChange] = useForm(formInitialState);
    const [img, setImg] = useState('');

    const history = useHistory();

    const { getAuthHeaders } = useAuthContext(); 

    const handleImgUpload = e => setImg(e.target.files[0]);
 
    const handleSubmit = async e => {

        e.preventDefault();        

        const options = {
            method: "POST",
            headers: getAuthHeaders({"Content-type": "application/json"}),
            body: JSON.stringify(form)
        }

        const response = await fetch(TEACHERS_URL, options);
        const data = await response.json();

        
        
        const formImg = new FormData();
        formImg.append("avatar", img);

        const optionsImg = {
            method: "POST",
            body:formImg
        }

        const responseImg = await fetch(`${TEACHERS_URL}/updateimg/${data.id}`, optionsImg);
        const dataImg = await responseImg;    
        
        if(response.status >= 200 && response.status < 300) {   

            history.push("/admin-teachers")
        
        } else {
            alert("No se pudo añadir");
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
            <h3>Añadir un nuevo profesor a nuestro equipo</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="avatarInput">Foto</label>
                    <input onChange={handleImgUpload} name="avatar" type="file" id="avatar" accept="png jpg jpeg"/>
                </div>
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

                 <button>Añadir</button>          
               
            </form>
        </div>
    )
}


