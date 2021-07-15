import {useHistory} from "react-router-dom";
import {useAuthContext} from "../../context/AuthContext";

export default function CourseCard({course}) {
 
    const history = useHistory();

    const {isAdmin} = useAuthContext();

    function handleClick() {
        history.push(`/hire-course/${course.id}`);
    }

    function handleEdit() {
        history.push(`admin-course-edit/${course.id}`);
    }

    return (
        <div>
            <h3>{course.name}</h3>
            <h4>{course.description}</h4>
            <h5>{course?.teacher?.name}</h5>
            <h5>{course?.teacher?.lastName}</h5>
            <p>{course.duration} horas</p>
            <p>{course.price} euros</p>
            {course.coursed && !isAdmin &&
                <span>Cursando</span> 
            } 
            {!course.coursed && !isAdmin &&
                <button onClick={handleClick}>Contratar</button>
            }             
            {isAdmin &&
                <button onClick={handleEdit}>Editar</button>
            }
            
        </div>
    )
}


