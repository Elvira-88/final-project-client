import './admin.css';
import {useHistory} from "react-router-dom";

export default function Admin() {

    const history = useHistory();

    function handleCourses() {
        history.push("/admin-courses")
    }

    function handleTeachers() {
        history.push("/admin-teachers")
    }

    return (
        <div className="admin">
            <h2>Bienvenido a la Dirección y Gestión de Formatio</h2>
            <h3>Accede a una de nuestras áreas</h3>
            <button onClick={()=>handleCourses()}>Cursos</button>
            <button onClick={()=>handleTeachers()}>Profesores</button>
            <button>Alumnos</button>
            <button className="enrollments">Matrículas</button>            
        </div>
    )
}

